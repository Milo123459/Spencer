import { Spencer } from '../client/Client';
import yocto from 'yocto-queue';
import { Guild, TextChannel, Message } from 'discord.js';
import { ShoukakuPlayer, ShoukakuTrack } from 'shoukaku';
import { Anything } from '../interfaces/Anything';

interface Queue extends ShoukakuTrack {
	message: Message;
}

class Dispatcher {
	public destroyed: boolean = false;
	public current: Queue;
	public queue: yocto<Queue> = new yocto();
	public constructor(
		public client: Spencer,
		public guild: Guild,
		public text: TextChannel,
		public player: ShoukakuPlayer
	) {
		this.player.on('start', () => {
			this.text.send(
				client
					.embed(
						{
							description: `Now playing [**${this.current.info.title}**](${this.current.info.uri}) by **${this.current.info.author}**`,
						},
						this.current.message
					)
					.setThumbnail(
						`https://img.youtube.com/vi/${this.current.info.identifier}/0.jpg`
					)
			);
		});
		this.player.on('end', async () => {
			if (this.queue.size == 0) return this.destroy();
			try {
				await this.play();
			} catch (e) {
				this.queue.clear();
				this.destroy(this.destroyed, 'the queue ended');
				this.client.logger.error(e);
			}
		});
		this.player.on('closed', (data: object | Error) => {
			if (data instanceof Error || data instanceof Object)
				this.client.logger.error(data);
			this.queue.clear();
			this.destroy(this.destroyed, 'the socket connection closed');
		});
		this.player.on('error', (data: object | Error) => {
			if (data instanceof Error || data instanceof Object)
				this.client.logger.error(data);
			this.queue.clear();
			this.destroy(this.destroyed, 'of an error');
		});
		this.player.on('nodeDisconnect', () => {
			this.queue.clear();
			this.destroy(this.destroyed, 'of a node disconnecting');
		});
	}
	public get exists(): boolean {
		return this.client.music.dispatchers.has(this.guild.id);
	}
	public async play(stuff?: Anything): Promise<void> {
		if (this.queue.size == 0) return this.destroy();
		this.current = this.queue.dequeue();
		if (!this.current) return this.destroy();
		await this.player.playTrack(this.current.track);
	}

	public destroy(destroyed?: boolean, reason?: string): void {
		if (destroyed && destroyed == true) return;
		this.destroyed = true;
		this.queue.clear();
		this.player.disconnect();
		this.text.send(`I left because ${reason ?? 'of an empty queue'}.`);
		this.client.music.remove(this.guild.id);
	}
}

export { Dispatcher };

import { Spencer } from '../client/Client';
import yocto from 'yocto-queue';
import { Guild, TextChannel, Message } from 'discord.js';
import { ShoukakuPlayer, ShoukakuTrack } from 'shoukaku';

interface Queue extends ShoukakuTrack {
	message: Message;
}

class Dispatcher {
	public loop: Queue;
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
							description: `Now playing [**${this.current.info.title}**](${
								this.current.info.uri
							}) by **${this.current.info.author}**${
								this.loop ? '\nThis song is looped.' : ''
							}`,
						},
						this.current.message
					)
					.setThumbnail(
						`https://img.youtube.com/vi/${this.current.info.identifier}/0.jpg`
					)
			);
		});
		this.player.on('end', async () => {
			if (this.queue.size == 0 && !!this.loop?.message) {
				try {
					await this.play();
				} catch (e) {
					this.queue.clear();
					this.destroy('the queue ended');
					this.client.logger.error(e);
				}
			} else if (this.queue.size > 0) {
				try {
					await this.play();
				} catch (e) {
					this.queue.clear();
					this.destroy('the queue ended');
					this.client.logger.error(e);
				}
			} else return this.destroy();
		});
		this.player.on('closed', (data: object | Error) => {
			this.queue.clear();
			this.destroy('the socket connection closed');
		});
		this.player.on('error', (data: object | Error) => {
			this.queue.clear();
			this.destroy('of an error');
		});
		this.player.on('nodeDisconnect', () => {
			this.queue.clear();
			this.destroy('of a node disconnecting');
		});
	}
	public get exists(): boolean {
		return this.client.music.dispatchers.has(this.guild.id);
	}
	public async play(): Promise<void> {
		if (this.queue.size == 0 && !!!this.loop?.message) return this.destroy();
		if (!!this.loop?.message == true)
			return void (await this.player.playTrack(this.loop.track));
		this.current = this.queue.dequeue();
		if (!this.current) return this.destroy();
		await this.player.playTrack(this.current.track);
	}

	public destroy(reason?: string): void {
		delete this.loop;
		this.queue.clear();
		this.player.disconnect();
		this.text.send(`I left because ${reason ?? 'of an empty queue'}.`);
		this.client.music.remove(this.guild.id);
	}
}

export { Dispatcher };

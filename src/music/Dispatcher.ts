import { Spencer } from '../client/Client';
import { Guild, TextChannel, Message } from 'discord.js';
import { ShoukakuPlayer, ShoukakuTrack } from 'shoukaku';

interface Queue extends ShoukakuTrack {
	message: Message;
}

class Dispatcher {
	public current: Queue;
	public queue: Queue[] = [];
	public constructor(
		public client: Spencer,
		public guild: Guild,
		public text: TextChannel,
		public player: ShoukakuPlayer
	) {
		this.player.on('start', () =>
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
			)
		);
		this.player.on('end', async () => {
			try {
				await this.play();
			} catch (e) {
				this.queue.length = 0;
				this.destroy();
				this.client.logger.error(e);
			}
		});
		this.player.on('closed', (data: object | Error) => {
			if (data instanceof Error || data instanceof Object)
				this.client.logger.error(data);
			this.queue.length = 0;
			this.destroy();
		});
		this.player.on('error', (data: object | Error) => {
			if (data instanceof Error || data instanceof Object)
				this.client.logger.error(data);
			this.queue.length = 0;
			this.destroy();
		});
		this.player.on('nodeDisconnect', () => {
			this.queue.length = 0;
			this.destroy();
		});
	}
	public get exists(): boolean {
		return this.client.music.queue.has(this.guild.id);
	}
	public async play(): Promise<void> {
		if (!this.exists || !this.queue.length) return this.destroy();
		this.current = this.queue.shift();
		await this.player.playTrack(this.current);
	}

	public destroy(): void {
		this.queue.length = 0;
		this.player.disconnect();
		this.text.send('I left because of an empty queue.');
	}
}

export { Dispatcher };

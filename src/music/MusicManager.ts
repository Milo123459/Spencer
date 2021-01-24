import { Message, TextChannel } from 'discord.js';
import { ShoukakuTrack, Shoukaku, ShoukakuSocket } from 'shoukaku';
import { Dispatcher } from './Dispatcher';
import { Spencer } from '../client/Client';

class Dispatchers extends Map<string, Dispatcher> {}

class MusicManager {
	public dispatchers: Dispatchers = new Dispatchers();
	public shoukaku: Shoukaku;
	public constructor(public client: Spencer) {
		this.client.logger.info('Music has been constructed');
		this.shoukaku = new Shoukaku(
			this.client,
			this.client.config.lavalinkNodes,
			{
				moveOnDisconnect: false,
				reconnectTries: 3,
				restTimeout: 10000,
			}
		);
	}
	public async handle(
		node: ShoukakuSocket,
		track: ShoukakuTrack,
		message: Message
	): Promise<void | Dispatcher> {
		const dispatcher: Dispatcher = this.dispatchers.get(message.guild.id);
		if (dispatcher?.current) {
			dispatcher.queue.enqueue({ message, ...track });
			return dispatcher;
		} else {
			const player = await node.joinVoiceChannel({
				guildID: message.guild.id,
				voiceChannelID: message.member.voice.channelID,
			});
			const newDispatcher = new Dispatcher(
				this.client,
				message.guild,
				message.channel as TextChannel,
				player
			);
			newDispatcher.queue.enqueue({ message, ...track });
			this.dispatchers.set(message.guild.id, newDispatcher);
			await newDispatcher.play();
			return newDispatcher;
		}
	}
	public remove(guild: string): void {
		this.dispatchers.delete(guild);
	}
}

export { MusicManager };

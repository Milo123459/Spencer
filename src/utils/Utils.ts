import { Message, GuildMember } from 'discord.js';
import { Spencer } from '../client/Client';

class UtilsManager {
	private client: Spencer;
	public constructor(client: Spencer) {
		this.client = client;
	}
	public ResolveMember(message: Message, arg: string): GuildMember | boolean {
		if (message.mentions.members.first()) return message.mentions.members.first();
		if (!isNaN(parseInt(arg))) return message.guild.members.cache.get(arg);
		return false;
	}
}
export { UtilsManager };

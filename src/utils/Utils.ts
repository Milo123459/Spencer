import { Message, GuildMember } from 'discord.js';
import { Spencer } from '../client/Client';

class UtilsManager {
	private client: Spencer;
	public constructor(client: Spencer) {
		this.client = client;
	}
	public ResolveMember(message: Message, arg: string): GuildMember | boolean {
		if (message.mentions.members.first())
			return message.mentions.members.first();
		if (!isNaN(parseInt(arg))) return message.guild.members.cache.get(arg);
		return false;
	}
	public formatMS(ms: number): string {
		const times: object = {
			day: Math.floor(ms / (1000 * 60 * 60 * 24)),
			hour: Math.floor((ms / (1000 * 60 * 60)) % 24),
			minute: Math.floor((ms / (1000 * 60)) % 60),
			second: Math.floor((ms / 1000) % 60),
			week: Math.floor(ms / (1000 * 60 * 60 * 24 * 7)),
		};

		let string = '';

		for (const [key, value] of Object.entries(times)) {
			if (value > 0) string += ` ${value} ${key}${value > 1 ? 's, ' : ','}`;
		}
		return string
			.trim()
			.substring(0, string.trim().length - 1)
			.replace(/  /gi, ' ');
	}
}
export { UtilsManager };

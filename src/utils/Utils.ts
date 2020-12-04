import { Message, GuildMember, EmbedFieldData, GuildChannel } from 'discord.js';
import { Spencer } from '../client/Client';

class UtilsManager {
	private client: Spencer;
	public constructor(client: Spencer) {
		this.client = client;
		this.client.logger.info('Utils has been constructed');
	}
	public ResolveMember(message: Message, arg: string): GuildMember {
		if (message.mentions.members.first())
			return message.mentions.members.first();
		if (!isNaN(parseInt(arg.split(/ +/g)[0])))
			return message.guild.members.cache.get(arg.split(/ +/g)[0]);
		return message.guild.members.cache.find((value: GuildMember) =>
			value.displayName.toLowerCase().includes(arg.toLowerCase())
		);
	}
	public ResolveChannel(message: Message, arg: string): GuildChannel {
		if (message.mentions.channels.first())
			return message.mentions.channels.first();
		if (!isNaN(parseInt(arg))) return message.guild.channels.cache.get(arg);
	}
	public formatMS(ms: number): string {
		const times: object = {
			week: Math.floor(ms / (1000 * 60 * 60 * 24 * 7)),
			day: Math.floor(ms / (1000 * 60 * 60 * 24)),
			hour: Math.floor((ms / (1000 * 60 * 60)) % 24),
			minute: Math.floor((ms / (1000 * 60)) % 60),
			second: Math.floor((ms / 1000) % 60),
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
	public constructField(
		name: string,
		value: string,
		inline?: boolean
	): EmbedFieldData {
		return { name, value, inline };
	}
	public formatDate(date: Date, str: string): string {
		return str
			.replace(
				/DD/gi,
				date.getDay().toString() == '0' ? '1' : date.getDay().toString()
			)
			.replace(/MM/gi, date.getMonth().toString())
			.replace(/YYYY/gi, date.getFullYear().toString());
	}
	public async calculateJoinPosition(
		message: Message,
		user: GuildMember
	): Promise<number> {
		const sort = (await message.guild.members.fetch()).sort(
			(firstValue: GuildMember, secondValue: GuildMember) =>
				firstValue.joinedTimestamp - secondValue.joinedTimestamp
		);
		let joinPosition: number;
		sort.array().map((value: GuildMember, index: number) => {
			if (value.id == user.id) joinPosition = index + 1;
		});
		return joinPosition;
	}
}
export { UtilsManager };

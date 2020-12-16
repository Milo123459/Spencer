import {
	Message,
	GuildMember,
	EmbedFieldData,
	GuildChannel,
	User,
	MessageReaction,
	MessageCollector,
} from 'discord.js';
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
		if (!isNaN(parseInt(arg))) return message.guild.members.cache.get(arg);
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
	public proper(key: string, value: any): object {
		const obj = {};
		obj[key] = value;
		return obj;
	}
	public checkMultipleRoles(
		guild: string,
		user: string,
		roles: string | string[]
	): boolean {
		const member: GuildMember = this.client.guilds.cache
			.get(guild)
			.members.cache.get(user);
		if (!member) return false;
		const res: boolean[] = [];
		if (typeof roles == 'string') {
			res.push(member.roles.cache.has(roles));
		} else {
			roles.map((value: string) => {
				res.push(member.roles.cache.has(value));
			});
		}
		return !!res.filter((value: boolean) => !!value).length;
	}
	public async awaitReactions(
		queryUser: string,
		message: Message,
		reactions: string[]
	): Promise<string> {
		reactions.map(async (value: string) => await message.react(value));
		return new Promise(async (resolve, reject) => {
			const reactionCollector = message.createReactionCollector(
				(reaction: MessageReaction, user: User) =>
					reactions.includes(reaction.emoji.name) && user.id == queryUser,
				{ time: 30000 }
			);
			reactionCollector.on('collect', (reaction: MessageReaction) =>
				resolve(reaction.emoji.name)
			);
			reactionCollector.on('end', (collected, reason: string) =>
				reject(reason)
			);
		});
	}
}
export { UtilsManager };

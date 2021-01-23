import {
	Message,
	GuildMember,
	EmbedFieldData,
	GuildChannel,
	User,
	MessageReaction,
	TextChannel,
	MessageEmbedOptions,
} from 'discord.js';
import { Document } from 'mongoose';
import { Spencer } from '../client/Client';
import { Anything } from '../interfaces/Anything';
class UtilsManager {
	private client: Spencer;
	public constructor(client: Spencer) {
		this.client = client;
		this.client.logger.info('Utils has been constructed');
	}
	public ResolveMember(message: Message, arg: string): GuildMember {
		if (message.mentions.members.first())
			return message.mentions.members.first();
		if (!isNaN(parseInt(arg, 10))) return message.guild.members.cache.get(arg);
	}
	public ResolveChannel(message: Message, arg: string): GuildChannel {
		if (message.mentions.channels.first())
			return message.mentions.channels.first();
		if (!isNaN(parseInt(arg, 10))) return message.guild.channels.cache.get(arg);
	}
	public formatMS(ms: number): string {
		const times: object = {
			week: Math.floor(ms / (1000 * 60 * 60 * 24 * 7)),
			day: Math.floor((ms / (1000 * 60 * 60 * 24)) % 7),
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
		reactions: string[],
		time?: number
	): Promise<string> {
		reactions.map(async (value: string) => message.react(value));
		return new Promise(async (resolve, reject) => {
			const reactionCollector = message.createReactionCollector(
				(reaction: MessageReaction, user: User) =>
					reactions.includes(reaction.emoji.name) && user.id == queryUser,
				{ time: time ?? 30000 }
			);
			reactionCollector.on('collect', (reaction: MessageReaction) =>
				resolve(reaction.emoji.name)
			);
			reactionCollector.on('end', (collected, reason: string) =>
				reject(reason)
			);
		});
	}
	public async calculateMoney(
		User: string,
		amount: string,
		load: string
	): Promise<number> {
		const EconomySchema = await this.client.db.load('usereconomy');
		const UserData = await EconomySchema.findOne({ User });
		amount = amount.replace(new RegExp(',', 'gi'), '');
		if (amount == 'max' || amount == 'all')
			return (UserData as Anything)?.[load] || 0;
		if (isNaN(parseInt(amount, 10))) return 0;
		else if (parseInt(amount, 10) > (UserData as Anything)?.[load] || 0)
			return 0;
		else return parseInt(amount, 10);
	}
	public randomElement(arr: any[]): any {
		return arr[Math.floor(Math.random() * arr.length)];
	}
	public async getItems(schema: string): Promise<number> {
		const loaded = await this.client.db.load(schema);
		return (await loaded.find({})).length;
	}
	public async awaitMessages(
		queryUser: string,
		channel: TextChannel,
		time?: number
	): Promise<Message> {
		return new Promise(async (resolve, reject) => {
			const messageCollector = channel.createMessageCollector(
				(msg: Message) => msg.author.id == queryUser,
				{ time: time ?? 30000 }
			);
			messageCollector.on('collect', (msg: Message) => {
				resolve(msg);
			});
			messageCollector.on('end', (collected, reason: string) => reject(reason));
		});
	}
	public async fail(
		message: Message,
		embed: MessageEmbedOptions,
		cmd: string
	): Promise<Message> {
		this.client.cooldowns.set(`${message.author.id}${cmd}`, Date.now() + 3000);
		setTimeout(
			() => this.client.cooldowns.delete(`${message.author.id}${cmd}`),
			3000
		);
		return message.channel.send(this.client.embed(embed, message));
	}
	public async incrementItem(user: string, id: string): Promise<Document> {
		const usereconomy = await this.client.db.load('usereconomy');
		const profile = await usereconomy.findOne({ User: user });
		if (!profile)
			return usereconomy.create({
				User: user,
				Coins: 0,
				DepositedCoins: 0,
				Inventory: this.proper(id, 1),
			});
		else {
			const inventory = (profile as Anything)?.Inventory || {};
			inventory[id] = inventory[id] ? (inventory[id] += 1) : 1;
			return usereconomy.update({ User: user }, { Inventory: inventory });
		}
	}
	public async decrementItem(user: string, id: string): Promise<Document> {
		const usereconomy = await this.client.db.load('usereconomy');
		const profile = await usereconomy.findOne({ User: user });
		if (!profile)
			return usereconomy.create({
				User: user,
				Coins: 0,
				DepositedCoins: 0,
				Inventory: this.proper(id, 1),
			});
		else {
			const inventory = (profile as Anything)?.Inventory || {};
			inventory[id] = inventory[id] ? (inventory[id] -= 1) : 0;
			if (inventory[id] <= 0) delete inventory[id];
			return usereconomy.update({ User: user }, { Inventory: inventory });
		}
	}
	public async tryItAndSee<T>(code: Function): Promise<T | boolean> {
		try {
			const response: T = await code();
			return response;
		} catch {
			return false;
		}
	}
}
export { UtilsManager };

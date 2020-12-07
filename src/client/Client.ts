import consola, { Consola } from 'consola';
import {
	Client,
	Collection,
	Intents,
	Message,
	MessageEmbed,
	MessageEmbedOptions,
	GuildChannel,
	TextChannel,
} from 'discord.js';
import { DatabaseManager } from '../db/Database';
import { UtilsManager } from '../utils/Utils';
import glob from 'glob';
import { promisify } from 'util';
import mongoose, { Document } from 'mongoose';
import { Command } from '../interfaces/Command';
import { Event } from '../interfaces/Event';
import { Schema } from '../interfaces/Schema';
import { Config } from '../interfaces/Config';
import { Anything } from '../interfaces/Anything';
import cron from 'node-cron';
import pMap from 'p-map';
const globPromise = promisify(glob);
class Spencer extends Client {
	public logger: Consola = consola;
	public commands: Collection<string, object> = new Collection();
	public aliases: Collection<string, string> = new Collection();
	public cooldowns: Collection<string, number> = new Collection();
	public events: Collection<string, object> = new Collection();
	public schemas: Collection<string, object> = new Collection();
	public categories: Set<string> = new Set();
	public db: DatabaseManager;
	public utils: UtilsManager;
	public prefix: string;
	public owners: Array<string> = ['450212014912962560'];
	public config: Config;
	public constructor() {
		super({
			ws: { intents: Intents.ALL },
			messageCacheLifetime: 180,
			messageCacheMaxSize: 200,
			messageSweepInterval: 180,
			messageEditHistoryMaxSize: 200,
		});
	}
	public async start(config: Config): Promise<void> {
		this.config = config;
		this.prefix = config.prefix;
		this.login(config.token).catch((e) => this.logger.error(e));
		mongoose
			.connect(config.mongoURI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.catch((e) => this.logger.error(e));
		const commandFiles: string[] = await globPromise(
			`${__dirname}/../commands/**/*{.js,.ts}`
		);
		const eventFiles: string[] = await globPromise(
			`${__dirname}/../events/**/*{.js,.ts}`
		);
		const schemaFiles: string[] = await globPromise(
			`${__dirname}/../models/**/*{.js,.ts}`
		);
		commandFiles.map(async (cmdFile: string) => {
			const cmd = (await import(cmdFile)) as Command;
			this.commands.set(cmd.name, { cooldown: 3000, ...cmd });
			if (cmd.aliases) {
				cmd.aliases.map((alias: string) => this.aliases.set(alias, cmd.name));
			}
			this.categories.add(cmd.category);
		});
		eventFiles.map(async (eventFile: string) => {
			const ev = (await import(eventFile)) as Event;
			this.events.set(ev.name, ev);
			(ev.emitter || this).on(ev.name, ev.run.bind(null, this));
		});
		schemaFiles.map(async (schemaFile: string) => {
			const sch = (await import(schemaFile)) as Schema;
			this.schemas.set(sch.name, sch);
		});
		this.db = new DatabaseManager(this);
		this.utils = new UtilsManager(this);
		cron.schedule('0 0 * * *', async () => {
			this.logger.info('Purging deleted suggestions..');
			const SuggestionSchema = await this.db.load('suggestion');
			const GuildConfigSchema = await this.db.load('guildconfig');
			const Suggestions = await SuggestionSchema.find({});
			await pMap(Suggestions, async (suggestion: Document) => {
				const GuildConfig = await GuildConfigSchema.findOne({
					Guild: (suggestion as Anything).Guild,
				});
				if (!(GuildConfig as Anything)?.SuggestionChannel || !GuildConfig)
					return await suggestion.delete();
				const channel: GuildChannel = this.guilds.cache
					.get((suggestion as Anything).Guild)
					?.channels?.cache?.get((GuildConfig as Anything).SuggestionChannel);
				if (!channel) return await suggestion.delete();
				try {
					await (channel as TextChannel)?.messages?.fetch(
						(suggestion as Anything)?.MessageID
					);
				} catch {
					return await suggestion.delete();
				}
			});
			this.logger.info('Purged suggestions');
		});
	}
	public embed(data: MessageEmbedOptions, message: Message): MessageEmbed {
		return new MessageEmbed({
			...data,
			color: 'RANDOM',
			footer: {
				text: `${message.author.tag} | 👦 Spencer`,
				iconURL: message.author.displayAvatarURL({
					dynamic: true,
					format: 'png',
				}),
			},
		});
	}
}
export { Spencer };

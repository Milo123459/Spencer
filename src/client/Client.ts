import consola, { Consola } from 'consola';
import {
	Client,
	Collection,
	Intents,
	Message,
	MessageEmbed,
	MessageEmbedOptions,
} from 'discord.js';
import { DatabaseManager } from '../db/Database';
import { UtilsManager } from '../utils/Utils';
import glob from 'glob';
import { promisify } from 'util';
import mongoose from 'mongoose';
import pm2 from '@pm2/io';
import { Command } from '../interfaces/Command';
import { Event } from '../interfaces/Event';
import { Schema } from '../interfaces/Schema';
import { Config } from '../interfaces/Config';
import { VACEFronJS } from 'vacefron';

const globPromise = promisify(glob);
class Spencer extends Client {
	public logger: Consola = consola;
	public commands: Collection<string, Command> = new Collection();
	public aliases: Collection<string, string> = new Collection();
	public cooldowns: Collection<string, number> = new Collection();
	public events: Collection<string, Event> = new Collection();
	public schemas: Collection<string, Schema> = new Collection();
	public categories: Set<string> = new Set();
	public db: DatabaseManager;
	public utils: UtilsManager;
	public prefix: string;
	public owners: Array<string>;
	public config: Config;
	public vacefron: VACEFronJS = new VACEFronJS();
	public remindersMetric = pm2.metric({ name: 'reminders' });
	public economiesMetric = pm2.metric({ name: 'economies' });
	public suggestionsMetric = pm2.metric({ name: 'suggestions' });
	public guildConfigMetric = pm2.metric({ name: 'guildconfigs' });
	public raidUsersMetric = pm2.metric({ name: 'raidusers' });
	public constructor() {
		super({
			ws: { intents: Intents.ALL },
			messageCacheLifetime: 180,
			messageCacheMaxSize: 200,
			messageSweepInterval: 180,
			messageEditHistoryMaxSize: 200,
			partials: ['MESSAGE', 'GUILD_MEMBER', 'CHANNEL', 'REACTION', 'USER'],
		});
	}
	public async start(config: Config): Promise<void> {
		this.config = config;
		this.prefix = config.prefix;
		this.owners = config.owners;
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

		setInterval(async () => {
			const RemindersSchema = await this.db.load('reminder');
			const EconomySchema = await this.db.load('usereconomy');
			const SuggestionSchema = await this.db.load('suggestion');
			const GuildConfigSchema = await this.db.load('guildconfig');
			const RaidUserSchema = await this.db.load('raiduser');
			const Reminders = (await RemindersSchema.find({})).length;
			const Economies = (await EconomySchema.find({})).length;
			const Suggestions = (await SuggestionSchema.find({})).length;
			const GuildConfigs = (await GuildConfigSchema.find({})).length;
			const RaidUsers = (await RaidUserSchema.find({})).length;
			this.remindersMetric.set(Reminders);
			this.economiesMetric.set(Economies);
			this.suggestionsMetric.set(Suggestions);
			this.guildConfigMetric.set(GuildConfigs);
			this.raidUsersMetric.set(RaidUsers);
		}, 1000 * 60);
	}
	public embed(data: MessageEmbedOptions, message: Message): MessageEmbed {
		return new MessageEmbed({
			color: 'RANDOM',
			...data,
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

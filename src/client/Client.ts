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
import { Command } from '../interfaces/Command';
import { Event } from '../interfaces/Event';
import { Schema } from '../interfaces/Schema';
import { Config } from '../interfaces/Config';
import { VACEFronJS } from 'vacefron';
import { Api, Webhook } from '@top-gg/sdk';
import EventEmitter from 'events';
import { MusicManager } from '../music/MusicManager';
import Statcord from 'statcord.js';

const globPromise = promisify(glob);
class Spencer extends Client {
	public logger: Consola = consola;
	public commands: Collection<string, Command> = new Collection();
	public aliases: Collection<string, string> = new Collection();
	public cooldowns: Collection<string, number> = new Collection();
	public schemas: Collection<string, Schema> = new Collection();
	public categories: Set<string> = new Set();
	public db: DatabaseManager;
	public utils: UtilsManager;
	public music: MusicManager;
	public prefix: string;
	public owners: Array<string>;
	public config: Config;
	public vacefron: VACEFronJS = new VACEFronJS();
	public topGGApi: Api;
	public topGGWebhook: Webhook;
	public statcord: Statcord.Client;
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

		this.db = new DatabaseManager(this);
		this.utils = new UtilsManager(this);
		this.music = new MusicManager(this);
		this.statcord = new Statcord.Client({
			key: config.statcordToken,
			postCpuStatistics: false,
			postMemStatistics: false,
			postNetworkStatistics: false,
			client: this,
		});
		this.topGGApi = new Api(this.config.topGGToken);
		this.topGGWebhook = new Webhook(this.config.webAuth);
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
			if (ev.emitter && typeof ev.emitter == 'function') {
				ev.emitter(this).on(ev.name, ev.run.bind(null, this));
			} else if (ev.emitter && ev.emitter instanceof EventEmitter) {
				(ev.emitter as EventEmitter).on(ev.name, ev.run.bind(null, this));
			} else {
				this.on(ev.name, ev.run.bind(null, this));
			}
		});
		schemaFiles.map(async (schemaFile: string) => {
			const sch = (await import(schemaFile)) as Schema;
			this.schemas.set(sch.name, sch);
		});
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

import consola, { Consola } from 'consola';
import { Client, Collection, Options } from 'discord.js';
import { DatabaseManager } from '../db/Database';
import glob from 'glob';
import { promisify } from 'util';
import mongoose from 'mongoose';
import { Command } from '../interfaces/Command';
import { Event } from '../interfaces/Event';
import { Schema } from '../interfaces/Schema';
import { Config } from '../interfaces/Config';
import EventEmitter from 'events';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const globPromise = promisify(glob);
class Spencer extends Client {
	public logger: Consola = consola;
	public commands: Collection<string, Command> = new Collection();
	public aliases: Collection<string, string> = new Collection();
	public cooldowns: Collection<string, number> = new Collection();
	public schemas: Collection<string, Schema> = new Collection();
	public categories: Set<string> = new Set();
	public db: DatabaseManager;
	public prefix: string;
	public owners: Array<string>;
	public config: Config;
	public sl_rest: REST;
	public constructor() {
		super({
			intents: 32767,
			makeCache: Options.cacheWithLimits({
				MessageManager: 0,
				ApplicationCommandManager: 0,
				BaseGuildEmojiManager: 0,
				GuildBanManager: 0,
				GuildEmojiManager: 0,
				GuildInviteManager: 0,
				GuildMemberManager: 0,
				GuildStickerManager: 0,
				PresenceManager: 0,
				ReactionManager: 0,
				ReactionUserManager: 0,
				StageInstanceManager: 0,
				ThreadManager: 0,
				ThreadMemberManager: 0,
				UserManager: 0,
				VoiceStateManager: 0,
			}),
		});
	}
	public async start(config: Config): Promise<void> {
		this.config = config;
		this.prefix = config.prefix;
		this.owners = config.owners;
		this.login(config.token).catch((e) => this.logger.error(e));
		this.sl_rest = new REST({ version: '9' }).setToken(config.token);
		mongoose.connect(config.mongoURI).catch((e) => this.logger.error(e));

		this.db = new DatabaseManager(this);
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
			const cmd = require(cmdFile) as Command;
			this.commands.set(cmd.name, { cooldown: 3000, ...cmd });
			this.categories.add(cmd.category);
		});

		eventFiles.map(async (eventFile: string) => {
			const ev = require(eventFile) as Event;

			if (ev.emitter && typeof ev.emitter == 'function') {
				ev.emitter(this).on(ev.name, ev.run.bind(null, this));
			} else if (ev.emitter && ev.emitter instanceof EventEmitter) {
				(ev.emitter as EventEmitter).on(ev.name, ev.run.bind(null, this));
			} else {
				this.on(ev.name, ev.run.bind(null, this));
			}
		});

		schemaFiles.map(async (schemaFile: string) => {
			const sch = require(schemaFile) as Schema;
			this.schemas.set(sch.name, sch);
		});
	}
}
export { Spencer };

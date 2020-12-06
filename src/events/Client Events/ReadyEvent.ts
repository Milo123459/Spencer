import { RunFunction } from '../../interfaces/Event';
import { Anything } from '../../interfaces/Anything';
import cron from 'node-cron';
import {
	GuildChannel,
	TextChannel,
	Message,
	PresenceManager,
} from 'discord.js';
import { Document } from 'mongoose';
import pMap from 'p-map';
export const name: string = 'ready';
export const run: RunFunction = async (client) => {
	client.logger.success(`${client.user.tag} is now online!`);
	await client.user.setActivity(`${client.prefix}help | 👦 Spencer`, {
		type: 'WATCHING',
	});
	cron.schedule('0 0 * * *', async () => {
		client.logger.info('Purging deleted suggestions..');
		const SuggestionSchema = await client.db.load('suggestion');
		const GuildConfigSchema = await client.db.load('guildconfig');
		const Suggestions = await SuggestionSchema.find({});
		await pMap(Suggestions, async (suggestion: Document) => {
			const GuildConfig = await GuildConfigSchema.findOne({
				Guild: (suggestion as Anything).Guild,
			});
			if (!(GuildConfig as Anything)?.SuggestionChannel || !GuildConfig)
				return await suggestion.delete();
			const channel: GuildChannel = client.guilds.cache
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
		client.logger.info('Purged suggestions');
	});
};

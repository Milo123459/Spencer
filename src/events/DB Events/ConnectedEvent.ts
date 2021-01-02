import { RunFunction } from '../../interfaces/Event';
import mongoose from 'mongoose';
import { EventEmitter } from 'events';
export const name: string = 'connected';
export const run: RunFunction = async (client) => {
	client.logger.success(`MongoDB is now connected!`);
	setInterval(async () => {
		const ReminderSchema = await client.db.load('reminder');
		const EconomySchema = await client.db.load('usereconomy');
		const SuggestionSchema = await client.db.load('suggestion');
		const GuildConfigSchema = await client.db.load('guildconfig');
		const RaidUserSchema = await client.db.load('raiduser');
		const Reminders = (await ReminderSchema.find({})).length;
		const Economies = (await EconomySchema.find({})).length;
		const Suggestions = (await SuggestionSchema.find({})).length;
		const GuildConfigs = (await GuildConfigSchema.find({})).length;
		const RaidUsers = (await RaidUserSchema.find({})).length;
		client.remindersMetric.set(Reminders);
		client.economiesMetric.set(Economies);
		client.suggestionsMetric.set(Suggestions);
		client.guildConfigMetric.set(GuildConfigs);
		client.raidUsersMetric.set(RaidUsers);
	}, 60 * 1000);
};
export const emitter: EventEmitter = mongoose.connection;

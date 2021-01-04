import { RunFunction } from '../../interfaces/Event';
import mongoose from 'mongoose';
import { EventEmitter } from 'events';
export const name: string = 'connected';
export const run: RunFunction = async (client) => {
	client.logger.success(`MongoDB is now connected!`);
	client.guildconfigMetric.set(await client.utils.getItems('guildconfig'));
	client.raiduserMetric.set(await client.utils.getItems('raiduser'));
	client.reminderMetric.set(await client.utils.getItems('reminder'));
	client.suggestionMetric.set(await client.utils.getItems('suggestion'));
	client.usereconomyMetric.set(await client.utils.getItems('usereconomy'));
	setInterval(async () => {
		client.guildconfigMetric.set(await client.utils.getItems('guildconfig'));
		client.raiduserMetric.set(await client.utils.getItems('raiduser'));
		client.reminderMetric.set(await client.utils.getItems('reminder'));
		client.suggestionMetric.set(await client.utils.getItems('suggestion'));
		client.usereconomyMetric.set(await client.utils.getItems('usereconomy'));
	}, 1000 * 60);
};
export const emitter: EventEmitter = mongoose.connection;

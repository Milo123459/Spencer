import { ThreadChannel } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';

export const run: RunFunction = async (client, thread: ThreadChannel) => {
	await thread.join();
};

import { string } from 'mathjs';
import { FunctionForEE, RunFunction } from '../../interfaces/Event';
export const run: RunFunction = async (client, name: string, reason?: string) =>
	client.logger.info(
		`Lavalink node ${name} disconnected. ${reason || 'No reason.'}`
	);
export const name: string = 'disconnected';
export const emitter: FunctionForEE = (client) => client.music.shoukaku;

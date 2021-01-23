import { RunFunction, FunctionForEE } from '../../interfaces/Event';
export const run: RunFunction = async (
	client,
	name: string,
	resumed: boolean
) =>
	client.logger.success(
		`Lavalink node ${name} has connected. Resumed: ${resumed}`
	);

export const name: string = 'ready';

export const emitter: FunctionForEE = (client) => client.music.shoukaku;

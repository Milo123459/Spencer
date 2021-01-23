import { FunctionForEE, RunFunction } from '../../interfaces/Event';
export const run: RunFunction = async (client, name: string, error: Error) =>
	client.logger.error(error);
export const name: string = 'error';
export const emitter: FunctionForEE = (client) => client.music.shoukaku;

import { FunctionForEE, RunFunction } from '../../interfaces/Event';
export const run: RunFunction = async (
	client,
	name: string,
	code: number,
	reason?: string
) =>
	client.logger.info(
		`Lavalink node ${name} exited with code ${code}. ${reason || 'No reason.'}`
	);
export const name: string = 'close';
export const emitter: FunctionForEE = (client) => client.music.shoukaku;

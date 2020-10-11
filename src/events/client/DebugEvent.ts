import { RunFunction } from '../../interfaces/Event';
export const name: string = 'debug';
export const run: RunFunction = async (client, info: string) => {
	client.logger.info(info);
};

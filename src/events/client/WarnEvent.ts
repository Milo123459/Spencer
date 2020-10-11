import { RunFunction } from '../../interfaces/Event';
export const name: string = 'warn';
export const run: RunFunction = async (client, info: string) => {
	client.logger.warn(info);
};

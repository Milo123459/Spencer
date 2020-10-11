import { RunFunction } from '../../interfaces/Event';
export const name: string = 'error';
export const run: RunFunction = async (client, error: unknown) => {
	client.logger.error(error);
};

import { RunFunction } from '../../interfaces/Event';
export const name: string = 'ready';
export const run: RunFunction = async (client) => {
	client.logger.success(`${client.user.tag} is now online!`);
};

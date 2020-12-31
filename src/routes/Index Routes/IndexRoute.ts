import { RunFunction, Method } from '../../interfaces/Route';
export const run: RunFunction = async (client, req, res) =>
	res.json({ msg: '🚀' });
export const method: Method = 'get';
export const path: string = '/';

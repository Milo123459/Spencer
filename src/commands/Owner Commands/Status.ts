import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client) =>
	client.user.setActivity(`${client.prefix}help | 👦 Spencer`, {
		type: 'WATCHING',
	});

export const ownerOnly: boolean = true;
export const name: string = 'status';
export const description: string = 'A command to fix the status';
export const category: string = 'owner';

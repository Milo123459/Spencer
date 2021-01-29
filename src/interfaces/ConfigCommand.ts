import { Message } from 'discord.js';
import { Spencer } from '../client/Client';
export interface ValidationResponse {
	value: boolean;
	fix: string;
	success: boolean;
}

export interface SubCommand {
	schema: string;
	search: (client: Spencer, message: Message) => object;
	key: string;
	description: string;
	validate: (
		client: Spencer,
		message: Message,
		args: string[]
	) => ValidationResponse;
	parseToDB: (client: Spencer, message: Message, args: string[]) => any;
}

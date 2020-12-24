import { RunFunction } from '../../interfaces/Command';
import { inspect } from 'util';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return await message.channel.send(
			client.embed({ description: 'Please provide some code' }, message)
		);
	const result: any = new Promise((resolve) => resolve(eval(args.join(' '))));
	try {
		let response = await result;
		if (typeof response != 'string') {
			response = inspect(result);
		}
		if (response.includes(client.token)) {
			response = response.replace(client.token, 'token');
		}
		if (response.includes(client.config.mongoURI)) {
			response = response.replace(client.config.mongoURI, 'mongouri');
		}
		if (response.length > 1950)
			return await message.channel.send(
				client.embed({ description: 'Content too long' }, message)
			);
		await message.channel.send(response, { code: true });
	} catch (e) {
		return await message.channel.send(
			e.message
				.replace(client.token, 'token')
				.replace(client.config.mongoURI, 'mongouri'),
			{ code: true }
		);
	}
};
export const ownerOnly: boolean = true;
export const name: string = 'eval';
export const category: string = 'owner';
export const usage: string = '<...code>';
export const description: string = 'Eval code';

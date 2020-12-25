import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed({ description: 'Please provide a message!' }, message)
		);
	await message.channel.send(
		client.embed(
			{ description: `( ͡° ͜ʖ ͡°) ${args.join(' ( ͡° ͜ʖ ͡°) ')} ( ͡° ͜ʖ ͡°)` },
			message
		)
	);
};
export const name: string = 'lenny';
export const category: string = 'fun';
export const aliases: string[] = ['lennyify', 'lennify'];
export const usage: string = '<text>';
export const description: string = 'Lennyify some text';

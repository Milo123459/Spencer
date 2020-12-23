import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return await message.channel.send(
			client.embed({ description: 'Please provide a message!' }, message)
		);
	await message.channel.send(
		client.embed({ description: args.join(' 👏 ') }, message)
	);
};
export const name: string = 'clap';
export const category: string = 'fun';
export const aliases: string[] = ['clapify'];
export const usage: string = '<text>';

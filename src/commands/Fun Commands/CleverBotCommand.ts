import { RunFunction } from '../../interfaces/Command';
import cleverbot from 'cleverbot-free';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description:
						'If you want to ask the bot of clever, please ask a question..',
				},
				message
			)
		);
	await message.react('🚀');
	const response: string = await cleverbot(args.join(' '), [
		`👋 Hi, my name is ${message.author.username}`,
	]);
	await message.channel.send(client.embed({ description: response }, message));
	await message.reactions.cache.get('🚀')?.remove();
};
export const name: string = 'cleverbot';
export const category: string = 'fun';
export const usage: string = '<...message>';
export const description: string = 'Speak to a stupid robot';

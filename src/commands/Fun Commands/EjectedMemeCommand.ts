import { RunFunction } from '../../interfaces/Command';
import { MessageAttachment } from 'discord.js';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description:
						'I need some text to generate this meme! `ejected <text>`',
				},
				message
			)
		);
	const buffer = await client.vacefron.ejected(args.join(' '));
	const attachment = new MessageAttachment(buffer);

	return message.channel.send(attachment);
};

export const name: string = 'ejected';
export const category: string = 'fun';
export const description: string =
	'Create an ejected meme command from Among Us.';
export const aliases: string[] = ['ejectedmeme'];

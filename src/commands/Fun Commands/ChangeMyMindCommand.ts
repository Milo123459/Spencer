import { MessageAttachment } from 'discord.js';
import nodeFetch from 'node-fetch';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description:
						'I need some text to generate this meme! `changemymind <text>`',
				},
				message
			)
		);

	nodeFetch(`https://vacefron.nl/api/changemymind?text=${args.join(' ')}`).then(
		async (response) => {
			const buffer = await response.buffer();
			return message.channel.send(new MessageAttachment(buffer));
		}
	);
};

export const name: string = 'changemymind';
export const category: string = 'fun';
export const aliases: string[] = ['cmm'];
export const usage: string = '<...text>';
export const description: string =
	'Generate a change my mine meme. (Example: https://i.imgur.com/3Qh649F.png)';

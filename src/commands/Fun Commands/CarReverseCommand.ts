import { MessageAttachment } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			'I need some text to generate this meme! `carreverse <text>`'
		);
	const buffer = await client.vacefron.carReverse(args.join(' '));
	const attachment = new MessageAttachment(buffer);

	return message.channel.send(attachment);
};

export const name: string = 'carreverse';
export const category: string = 'fun';
export const aliases: string[] = ['cr'];
export const usage: string = '<text>';
export const description: string =
	'Generate a car reverse meme. (Example: https://i.imgur.com/hDLKcVt.png)';

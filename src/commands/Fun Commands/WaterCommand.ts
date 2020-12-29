import { MessageAttachment } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			'I need some text to generate this meme! `water <text>`'
		);
	const buffer = await client.vacefron.water(args.join(' '));
	const attachment = new MessageAttachment(buffer);

	return message.channel.send(attachment);
};

export const name: string = 'water';
export const category: string = 'fun';
export const usage: string = '<...text>';
export const description: string =
	'Generate a water meme. (Example: https://i.imgur.com/x2p25U6.png)';

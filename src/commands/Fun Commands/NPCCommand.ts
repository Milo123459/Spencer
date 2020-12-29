import { MessageAttachment } from 'discord.js';
import fetch from 'node-fetch';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args[0] || !args[1] || !message.content.includes(','))
		return message.channel.send(
			client.embed(
				{
					description:
						'I need some text to generate this meme! `npc <gray guy text>,<white guy text>` *Make sure to include the comma between the texts!*',
				},
				message
			)
		);
	args = args.join(' ').split(',');
	fetch(`https://vacefron.nl/api/npc?text1=${args[0]}&text2=${args[1]}`).then(
		async (response) => {
			const buffer = await response.buffer();
			return message.channel.send(new MessageAttachment(buffer));
		}
	);
};

export const name: string = 'npc';
export const category: string = 'fun';
export const usage: string = '<...gray guy text>,<...white guy text>';
export const description: string =
	'Generate a npc meme. (Example: https://i.imgur.com/dUQMPZ9.png)';

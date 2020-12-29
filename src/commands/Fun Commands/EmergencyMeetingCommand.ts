import { MessageAttachment } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description:
						'I need some text to generate this meme! `emergencymeeting <text>`',
				},
				message
			)
		);
	const buffer = await client.vacefron.emergencyMeeting(args.join(' '));
	const attachment = new MessageAttachment(buffer);

	return message.channel.send(attachment);
};

export const name: string = 'emergencymeeting';
export const category: string = 'fun';
export const usage: string = '<...text>';
export const aliases: string[] = ['em'];
export const description: string =
	'Generate a emergency meeting meme (Example: https://i.imgur.com/UMVJrfv.png)';

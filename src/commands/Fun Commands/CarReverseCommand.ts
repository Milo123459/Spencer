import { ApplicationCommandOption, MessageAttachment } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	const buffer = await client.vacefron.carReverse(
		interaction.options.get('text', true).value as string
	);
	const attachment = new MessageAttachment(buffer);

	return interaction.reply(attachment);
};

export const name: string = 'carreverse';
export const category: string = 'fun';
export const aliases: string[] = ['cr'];
export const usage: string = '<...text>';
export const description: string =
	'Generate a car reverse meme. (Example: https://i.imgur.com/hDLKcVt.png)';
export const options: ApplicationCommandOption[] = [
	{
		name: 'text',
		type: 'STRING',
		description: 'The text',
		required: true,
	},
];

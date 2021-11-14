import { RunFunction } from '../../interfaces/Command';
import { ApplicationCommandOption, MessageAttachment } from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const buffer = await client.vacefron.npc(
		interaction.options.get('grayguy', true).value as string,
		interaction.options.get('whiteguy', true).value as string
	);
	const attachment = new MessageAttachment(buffer);

	return interaction.reply(attachment);
};

export const name: string = 'npc';
export const category: string = 'fun';
export const usage: string = '<...gray guy text>,<...white guy text>';
export const description: string =
	'Generate a npc meme. (Example: https://i.imgur.com/dUQMPZ9.png)';
export const options: ApplicationCommandOption[] = [
	{
		name: 'grayguy',
		type: 'STRING',
		description: 'What the gray guy says',
		required: true,
	},
	{
		name: 'whiteguy',
		type: 'STRING',
		description: 'What the white guy says',
		required: true,
	},
];

import { ApplicationCommandOption, MessageAttachment } from 'discord.js';
import nodeFetch from 'node-fetch';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	nodeFetch(
		`https://vacefron.nl/api/changemymind?text=${
			interaction.options.get('text', true).value
		}`
	).then(async (response) => {
		const buffer = await response.buffer();
		return interaction.reply(new MessageAttachment(buffer));
	});
};

export const name: string = 'changemymind';
export const category: string = 'fun';
export const aliases: string[] = ['cmm'];
export const usage: string = '<...text>';
export const description: string =
	'Generate a change my mind meme. (Example: https://i.imgur.com/3Qh649F.png)';
export const options: ApplicationCommandOption[] = [
	{
		name: 'text',
		type: 'STRING',
		description: 'The text',
		required: true,
	},
];

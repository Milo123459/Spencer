import { ApplicationCommandOption } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	await interaction.reply({
		embeds: [
			client.embed(
				{ description: `👏 ${interaction.options.get('text', true).value} 👏` },
				interaction
			),
		],
	});
};
export const name: string = 'clap';
export const category: string = 'fun';
export const aliases: string[] = ['clapify'];
export const usage: string = '<text>';
export const description: string = 'Clapify text';
export const options: ApplicationCommandOption[] = [
	{
		name: 'text',
		type: 'STRING',
		description: 'The text',
		required: true,
	},
];

import { ApplicationCommandOption } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	await interaction.reply({
		embeds: [
			client.embed(
				{
					description: `( ͡° ͜ʖ ͡°) ${(
						interaction.options.get('text', true).value as string
					)
						.split(' ')
						.join(' ( ͡° ͜ʖ ͡°) ')} ( ͡° ͜ʖ ͡°)`,
				},
				interaction
			),
		],
	});
};
export const name: string = 'lenny';
export const category: string = 'fun';
export const aliases: string[] = ['lennyify', 'lennify'];
export const usage: string = '<text>';
export const description: string = 'Lennyify some text';
export const options: ApplicationCommandOption[] = [
	{
		name: 'text',
		type: 'STRING',
		description: 'The text',
		required: true,
	},
];

import { RunFunction } from '../../interfaces/Command';
import { evaluate } from 'mathjs';
import { ApplicationCommandOption } from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	try {
		const sum = evaluate(
			interaction.options.get('equation', true).value as string
		);
		await interaction.reply({
			embeds: [
				client.embed(
					{ description: `Your equasion results:\n\`\`\`\n${sum}\`\`\`` },
					interaction
				),
			],
		});
	} catch {
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: "I'm no genius, but that didn't make sense!" },
					interaction
				),
			],
		});
	}
};

export const aliases: string[] = ['maths', 'calculate'];
export const usage: string = '<equation>';
export const name: string = 'math';
export const category: string = 'utility';
export const description: string = 'A cool command';
export const options: ApplicationCommandOption[] = [
	{
		name: 'equation',
		description: 'Why do you need a description for this?',
		type: 'STRING',
		required: true,
	},
];

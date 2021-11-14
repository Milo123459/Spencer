import { Command, RunFunction } from '../../interfaces/Command';
import {
	ApplicationCommandOption,
	EmbedFieldData,
	MessageEmbed,
} from 'discord.js';
import ms from 'ms';

export const name: string = 'help';
export const run: RunFunction = async (client, interaction) => {
	const fields: Array<EmbedFieldData> = [...client.categories]
		.filter((value: string) => value != 'owner')
		.map((category: string) => {
			return {
				name: `${category[0].toUpperCase() + category.slice(1)} [${
					client.commands.filter((cmd: Command) => cmd.category == category)
						.size
				}]`,
				value: client.commands
					.filter((cmd: Command) => cmd.category == category)
					.map((cmd: Command) => `\`${cmd.name}\``)
					.join(', '),
			};
		});
	const commandEmbed: MessageEmbed = client.embed(
		{
			fields,
			description: `**${client.user.username}** currently has **${
				client.commands.filter((value: Command) => value.category != 'owner')
					.size
			}** public commands available!\nWant to support us? Go to the [GitHub repo](https://github.com/Milo123459/Spencer) and give us a star! You can also click that discussions button to ask questions, submit ideas, etc!`,
		},
		interaction
	);
	const cmd = interaction.options.get('command')?.value as string;
	if (!cmd) return interaction.reply({ embeds: [commandEmbed] });
	if (
		cmd &&
		!client.commands
			.filter((value: Command) => value.category != 'owner')
			.has(cmd.toLowerCase()) &&
		!client.commands
			.filter((value: Command) => value.category != 'owner')
			.has(client.aliases.get(cmd.toLowerCase()))
	)
		return interaction.reply({ embeds: [commandEmbed] });
	const command =
		client.commands
			.filter((value: Command) => value.category != 'owner')
			.get(cmd.toLowerCase()) ||
		client.commands
			.filter((value: Command) => value.category != 'owner')
			.get(client.aliases.get(cmd.toLowerCase()));
	interaction.reply({
		embeds: [
			client.embed(
				{
					description: Object.entries(command)
						.filter((data) => typeof data[1] != 'function')
						.map((data) =>
							data[0] == 'usage'
								? `**Usage**: \`/${(command as any).name} ${data[1]}\``
								: `**${data[0][0].toUpperCase() + data[0].slice(1)}**: ${
										data[1].map
											? data[1].map((d: unknown) => `\`${d}\``).join(', ')
											: typeof data[1] == 'number'
											? `\`${ms(data[1], { long: true })}\``
											: `\`${data[1]}\``
								  }`
						)
						.join('\n'),
					fields: [
						{
							name: 'Note!',
							value: 'If usage, [] = optional, <> = required.',
							inline: true,
						},
					],
				},
				interaction
			),
		],
	});
};
export const category: string = 'info';
export const aliases: string[] = ['h', 'commands'];
export const usage: string = '[cmd or alias]';
export const description: string = 'Get help';
export const options: ApplicationCommandOption[] = [
	{
		name: 'command',
		type: 'STRING',
		description: 'The command to get info of',
	},
];

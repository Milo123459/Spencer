import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	return interaction.reply({
		embeds: [
			client.embed(
				{
					description: `**${interaction.guild.name}** has got **${interaction.guild.memberCount}** members!`,
				},
				interaction
			),
		],
	});
};
export const aliases: string[] = ['membercount'];
export const name: string = 'members';
export const category: string = 'info';
export const description: string = 'Display how many members you have';
export const options: import("discord.js").ApplicationCommandOption[] = []
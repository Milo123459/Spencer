import { RunFunction } from '../../interfaces/Command';
export const name: string = 'deleteguildconfig';
export const run: RunFunction = async (client, interaction) => {
	const GuildConfigSchema = await client.db.load('guildconfig');
	const Delete = await GuildConfigSchema.delete({
		Guild: interaction.guild.id,
	});
	return interaction.reply({
		embeds: [
			client.embed(
				{
					description: Delete
						? 'I deleted the config.'
						: 'I did nothing as there was nothing to delete.',
				},
				interaction
			),
		],
	});
};
export const category: string = 'config';
export const userPermissions: string = 'MANAGE_GUILD';
export const description: string =
	'Delete guild config, ie removing the prefix';
export const options: import('discord.js').ApplicationCommandOption[] = [];

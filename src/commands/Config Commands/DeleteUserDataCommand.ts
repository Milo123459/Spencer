import { RunFunction } from '../../interfaces/Command';
export const name: string = 'deleteuserdata';
export const run: RunFunction = async (client, interaction) => {
	const GuildConfigSchema = await client.db.load('usereconomy');
	const Delete = await GuildConfigSchema.delete({ User: interaction.user.id });
	return interaction.reply({
		embeds: [
			client.embed(
				{
					description: Delete
						? 'I deleted the user data.'
						: 'I did nothing as there was nothing to delete.',
				},
				interaction
			),
		],
	});
};
export const category: string = 'config';
export const userPermissions: string = 'MANAGE_GUILD';
export const aliases: string[] = ['deluserdata'];
export const description: string =
	'Delete data stored with you, ie, your usereconomy profile';
export const options: import('discord.js').ApplicationCommandOption[] = [];

import { RunFunction } from '../../interfaces/Command';
export const name: string = 'deleteguildconfig';
export const run: RunFunction = async (client, message) => {
	const GuildConfigSchema = await client.db.load('guildconfig');
	const Delete = await GuildConfigSchema.delete({ Guild: message.guild.id });
	return await message.channel.send(
		client.embed(
			{
				description: Delete
					? 'I deleted the config.'
					: 'I did nothing as there was nothing to delete.',
			},
			message
		)
	);
};
export const category: string = 'config';
export const userPermissions: string = 'MANAGE_GUILD';
export const aliases: string[] = ['delguildconfig', 'delgc'];
export const description: string =
	'Delete guild config, ie removing the prefix';

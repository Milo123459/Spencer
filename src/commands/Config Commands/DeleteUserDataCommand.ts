import { RunFunction } from '../../interfaces/Command';
export const name: string = 'deleteuserdata';
export const run: RunFunction = async (client, message) => {
	const GuildConfigSchema = await client.db.load('usereconomy');
	const Delete = await GuildConfigSchema.delete({ User: message.author.id });
	return message.channel.send(
		client.embed(
			{
				description: Delete
					? 'I deleted the user data.'
					: 'I did nothing as there was nothing to delete.',
			},
			message
		)
	);
};
export const category: string = 'config';
export const userPermissions: string = 'MANAGE_GUILD';
export const aliases: string[] = ['deluserdata'];
export const description: string =
	'Delete data stored with you, ie, your usereconomy profile';

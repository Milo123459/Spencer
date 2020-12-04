import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	const GuildConfigSchema = await client.db.load('guildconfig');
	await GuildConfigSchema.update(
		{ Guild: message.guild.id },
		{ SuggestionChannel: null }
	);
	await message.channel.send(client.embed({ description: 'Done!' }, message));
};

export const userPermissions: string = 'MANAGE_GUILD';
export const aliases: string[] = ['dsc'];
export const name: string = 'deletesuggestionchannel';
export const category: string = 'config';

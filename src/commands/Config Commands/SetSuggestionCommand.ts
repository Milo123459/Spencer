import { GuildChannel } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	const channel: GuildChannel | undefined = client.utils.ResolveChannel(
		message,
		args[0]
	);
	if (!channel)
		return message.channel.send(
			client.embed(
				{
					description:
						"I couldn't find that channel, please mention one or give the id!",
				},
				message
			)
		);
	const GuildConfigSchema = await client.db.load('guildconfig');
	await GuildConfigSchema.update(
		{ Guild: message.guild.id },
		{ SuggestionChannel: channel.id }
	);
	return await message.channel.send(
		client.embed(
			{
				description: `Done! Successfully set the suggestion channel to ${channel} (${channel.name}!)`,
			},
			message
		)
	);
};
export const name: string = 'setsuggestion';
export const category: string = 'config';
export const aliases: string[] = ['ss', 'ssc', 'suggestionchannel'];
export const userPermissions: string = 'MANAGE_GUILD';

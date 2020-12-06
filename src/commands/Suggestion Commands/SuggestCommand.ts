import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { GuildChannel, Message, TextChannel } from 'discord.js';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{ description: 'Please specify a suggestion next time!' },
				message
			)
		);
	const GuildConfigSchema = await client.db.load('guildconfig');
	const SuggestionSchema = await client.db.load('suggestion');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	if (!GuildConfig || !(GuildConfig as Anything).SuggestionChannel)
		return await message.channel.send(
			client.embed(
				{
					description:
						'Get someone with MANAGE_GUILD to set the suggestion channel..',
				},
				message
			)
		);
	const channel: GuildChannel = message.guild.channels.cache.get(
		(GuildConfig as Anything).SuggestionChannel
	);
	if (
		!channel ||
		!channel
			?.permissionsFor(message.guild.me)
			?.has(['SEND_MESSAGES', 'ADD_REACTIONS'])
	)
		return await message.channel.send(
			client.embed(
				{
					description: `I either can't send messages in ${channel} or I can't add reactions`,
				},
				message
			)
		);
	const Suggestion = await SuggestionSchema.create({
		Guild: message.guild.id,
		Content: args.join(' '),
		User: message.author.id,
	});
	const msg: Message = await (channel as TextChannel).send(
		client
			.embed(
				{
					description: `${args.join(' ')}\n\nSuggestion ID: **${
						Suggestion._id
					}**`,
				},
				message
			)
			.setTimestamp()
			.addField('State', 'N/A')
	);
	await msg.react('👍');
	await msg.react('👎');
	await message.react('🚀');
	await SuggestionSchema.update({ _id: Suggestion._id }, { MessageID: msg.id });
};
export const name: string = 'suggest';
export const category: string = 'suggestion';

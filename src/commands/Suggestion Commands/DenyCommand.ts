import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { GuildChannel, Message, TextChannel, MessageEmbed } from 'discord.js';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return await message.channel.send(
			client.embed({ description: 'Please provide a suggestion ID!' }, message)
		);
	const SuggestionSchema = await client.db.load('suggestion');
	const GuildConfigSchema = await client.db.load('guildconfig');
	try {
		await SuggestionSchema.findOne({ Guild: message.guild.id, _id: args[0] });
	} catch {
		return await message.channel.send(
			client.embed({ description: "That suggestion doesn't exist!" }, message)
		);
	}
	const Suggestion = await SuggestionSchema.findOne({
		Guild: message.guild.id,
		_id: args[0],
	});
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	if (!GuildConfig || !(GuildConfig as Anything).SuggestionChannel)
		return message.channel.send(
			client.embed(
				{ description: "Somehow the suggestion channel isn't in the DB" },
				message
			)
		);
	const channel: GuildChannel = message.guild.channels.cache.get(
		(GuildConfig as Anything).SuggestionChannel
	);
	if (!Suggestion)
		return await message.channel.send(
			client.embed({ description: "That suggestion doesn't exist!" }, message)
		);
	if (!channel) {
		await Suggestion.delete();
		return await message.channel.send(
			client.embed(
				{
					description:
						"Suggestion channel is in DB, but the channel doesn't exist",
				},
				message
			)
		);
	}
	const msg: Message = await (channel as TextChannel).messages.fetch(
		(Suggestion as Anything).MessageID
	);
	const UpdatedSuggestion = await SuggestionSchema.update(
		{ _id: args[0] },
		{ State: 'Denied' }
	);
	await msg.edit(
		new MessageEmbed({
			...msg.embeds[0],
			fields: [
				{
					name: 'State',
					value: `${(UpdatedSuggestion as Anything).State} by **${
						message.author.username
					}**${
						args.slice(1).length
							? ` with reason **${args.slice(1).join(' ')}**`
							: ''
					}`,
				},
			],
			color: 'RED',
		})
	);
	try {
		await msg.reactions.removeAll();
	} catch {}
	try {
		await message.react('🚀');
	} catch {}
	if ((GuildConfig as Anything)?.AutoDeleteActions) {
		setTimeout(async () => {
			try {
				await message.delete();
			} catch {}
		}, 5000);
	}
};

export const userPermissions: string = 'MANAGE_GUILD';
export const name: string = 'deny';
export const category: string = 'suggestion';
export const usage: string = '<suggestion_id> [...reason]';
export const description: string = 'Deny a suggestion';

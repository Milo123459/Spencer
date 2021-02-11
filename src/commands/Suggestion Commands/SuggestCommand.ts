import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { emojis } from '../../static/Emojis';
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
		return message.channel.send(
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
	if (!channel)
		return message.channel.send(
			client.embed(
				{ description: "Hey... That channel doesn't exist?" },
				message
			)
		);
	if (
		!channel
			?.permissionsFor(message.guild.me)
			?.has(['SEND_MESSAGES', 'ADD_REACTIONS'])
	)
		return message.channel.send(
			client.embed(
				{
					description: `I either can't send messages in ${channel} or I can't add reactions`,
				},
				message
			)
		);
	if (!message.guild.me.permissions.has('USE_EXTERNAL_EMOJIS'))
		return message.channel.send(
			client.embed(
				{ description: 'I need permission to use external emotes!' },
				message
			)
		);
	const Suggestion = await SuggestionSchema.create({
		Guild: message.guild.id,
		Content: args.join(' '),
		User: message.author.id,
	});
	let m: Message;
	try {
		m = await message.channel.send(
			client.embed(
				{
					description: `
					**Please make sure you're suggestion hasn't already been suggested**

					Please check in ${channel}.

					✅ = Continue
					❌ = Cancel

					*You have 1 minute.*
					`.trim(),
				},
				message
			)
		);
		const should = await client.utils.awaitReactions(
			message.author.id,
			m,
			['✅', '❌'],
			60 * 1000
		);
		await m.delete();
		if (should == '❌') return;
	} catch {
		return m.delete();
	}
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
	await msg.react(emojis.spencerup);
	await msg.react(emojis.spencerdown);
	try {
		await message.react('🚀');
	} catch {}
	await SuggestionSchema.update({ _id: Suggestion._id }, { MessageID: msg.id });
};
export const name: string = 'suggest';
export const category: string = 'suggestion';
export const usage: string = '<...suggestion>';
export const description: string = 'Suggest something';

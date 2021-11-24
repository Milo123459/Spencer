import { RunFunction } from '../../interfaces/Command';

import { emojis } from '../../static/Emojis';
import {
	GuildChannel,
	InteractionCollector,
	Message,
	TextChannel,
	Permissions
} from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const GuildConfigSchema = await client.db.load('guildconfig');
	const SuggestionSchema = await client.db.load('suggestion');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: interaction.guild!.id,
	});
	if (!GuildConfig || !(GuildConfig as any).SuggestionChannel)
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							'Get someone with MANAGE_GUILD to set the suggestion channel..',
					},
					interaction
				),
			],
		});
	const channel = interaction.guild.channels.cache.get(
		(GuildConfig as any).SuggestionChannel
	) as GuildChannel;
	if (!channel)
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: "Hey... That channel doesn't exist?" },
					interaction
				),
			],
		});
	
	const Suggestion = await SuggestionSchema.create({
		Guild: interaction.guild.id,
		Content: interaction.options.get('suggestion').value!.toString(),
		User: interaction.user.id,
	});
	let m: Message;
	try {
		m = (await interaction.reply({
			embeds: [
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
					interaction
				),
			],
			fetchReply: true,
		})) as Message;
		const should = await client.utils.awaitReactions(
			interaction.user.id,
			m,
			['✅', '❌'],
			60 * 1000
		);
		await m.delete();
		if (should == '❌') return;
	} catch {
		return m.delete();
	}
	const msg: Message = await (channel as TextChannel).send({
		embeds: [
			client
				.embed(
					{
						description: interaction.options
							.get('suggestion')
							.value!.toString(),
					},
					interaction
				)
				.setTimestamp()
				.addField('State', 'N/A'),
		],
	});
	await msg.react(emojis.spencerup);
	await msg.react(emojis.spencerdown);
	try {
		await interaction.reply('🚀');
	} catch {}
	await SuggestionSchema.update({ _id: Suggestion._id }, { MessageID: msg.id });
};
export const name: string = 'suggest';
export const category: string = 'suggestion';
export const usage: string = '<...suggestion>';
export const description: string = 'Suggest something';
export const options: import('discord.js').ApplicationCommandOption[] = [
	{
		name: 'suggestion',
		type: 'STRING',
		required: true,
		description: 'Your suggestion',
	},
];

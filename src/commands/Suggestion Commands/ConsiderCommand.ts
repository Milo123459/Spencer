import { RunFunction } from '../../interfaces/Command';

import {
	GuildChannel,
	TextChannel,
	MessageEmbed,
	Message,
	User,
} from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const SuggestionSchema = await client.db.load('suggestion');
	const GuildConfigSchema = await client.db.load('guildconfig');
	const search = {
		interactionID: interaction.options.get('id').value!.toString(),
	};
	const Suggestion = await SuggestionSchema.findOne(search);
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: interaction.guild.id,
	});
	if (!GuildConfig || !(GuildConfig as any).SuggestionChannel)
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: "Somehow the suggestion channel isn't in the DB" },
					interaction
				),
			],
		});
	const channel = interaction.guild!.channels.cache.get(
		(GuildConfig as any).SuggestionChannel
	) as GuildChannel;
	if (!Suggestion)
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: "That suggestion doesn't exist!" },
					interaction
				),
			],
		});
	if (!channel) {
		await Suggestion.delete();
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							"Suggestion channel is in DB, but the channel doesn't exist",
					},
					interaction
				),
			],
		});
	}
	const msg: Message = await (channel as TextChannel).messages.fetch(
		(Suggestion as any).interactionID
	);
	const UpdatedSuggestion = await SuggestionSchema.update(search, {
		State: 'Considered',
	});
	await msg.edit({
		embeds: [
			new MessageEmbed({
				...msg.embeds[0],
				fields: [
					{
						name: 'State',
						value: `${(UpdatedSuggestion as any).State} by **${
							interaction.user.username
						}**${
							interaction.options.get('reason').value?.toString()?.length
								? ` with reason **${interaction.options
										.get('reason')
										.value?.toString()}**`
								: ''
						}`,
						inline: false,
					},
				],
			}).setColor('GREY'),
		],
	});

	const author: User = client.users.cache.get((Suggestion as any).User);
	if (author) {
		author.send({
			embeds: [
				client.embed(
					{
						title: `Your suggestion was considered in ${interaction.guild.name}!`,
						description: `A staff member considered your suggestion: ${
							(Suggestion as any).Content
						}`,
						color: 'GREY',
					},
					interaction
				),
			],
		});
	}

	try {
		await interaction.reply({ content: '🚀' });
	} catch {}
};

export const userPermissions: string = 'MANAGE_GUILD';
export const name: string = 'consider';
export const category: string = 'suggestion';
export const usage: string = '<interaction_id> [...reason]';
export const description: string = 'Consider a suggestion';
export const options: import('discord.js').ApplicationCommandOption[] = [
	{
		type: 'STRING',
		name: 'id',
		description: 'The message ID of the suggestion you want to consider',
		required: true,
	},
	{
		type: 'STRING',
		name: 'reason',
		description: 'The reason for considering the suggestion',
		required: false,
	},
];

import { RunFunction } from '../../interfaces/Command';
import {
	GuildChannel,
	TextChannel,
	Message,
	ApplicationCommandOption,
	MessageActionRow,
	MessageButton,
	GuildMember,
} from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: interaction.guild.id,
	});
	const [user, reason] = [
		await interaction.guild.members.fetch(
			interaction.options.get('user', true).value as string
		),
		interaction.options.get('reason', true).value as string,
	];
	if (!GuildConfig || !(GuildConfig as any)?.ReportChannel)
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							"This guild hasn't setup a report channel! Ask an admin to set it up!",
					},
					interaction
				),
			],
		});
	const channel: GuildChannel = interaction.guild.channels.cache.get(
		(GuildConfig as any).ReportChannel
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
	let m: Message;
	try {
		await interaction.reply({
			embeds: [
				client.embed(
					{
						description: `
                        **Are you sure you want to report** **${user.displayName}**?
    
                        ✅ = Continue
                        ❌ = Cancel
    
                        *You have 1 minute.*
                        `.trim(),
					},
					interaction
				),
			],
			components: [
				new MessageActionRow().addComponents([
					new MessageButton()
						.setEmoji('✅')
						.setCustomId('continue')
						.setLabel('SUCCESS'),
					new MessageButton()
						.setEmoji('❌')
						.setCustomId('cancel')
						.setLabel('DANGER'),
				]),
			],
			ephemeral: true,
		});
		m = (await interaction.fetchReply()) as Message;
		const should = (
			await m.awaitMessageComponent({
				filter: (button) => button.user.id == interaction.user.id,
				time: 60000,
			})
		).customId;
		if (should == 'cancel') return;
	} catch {
		await interaction.deleteReply();
	}
	if (!channel?.permissionsFor(interaction.guild.me)?.has('SEND_MESSAGES'))
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description: `I can't send messages in ${channel}!`,
					},
					interaction
				),
			],
		});
	await (channel as TextChannel).send({
		embeds: [
			client.embed(
				{
					fields: [
						{
							name: 'Reporter',
							value: `${(interaction.member as GuildMember).displayName} (${
								interaction.user.id
							})`,
							inline: true,
						},
						{
							name: 'Reported',
							value: `${user.displayName} (${user.id})`,
							inline: true,
						},
						{
							name: 'Reason',
							value: reason,
						},
					],
					timestamp: Date.now(),
				},
				interaction
			),
		],
	});
};
export const usage: string = '<user> <...reason>';
export const name: string = 'report';
export const category: string = 'moderation';
export const description: string = 'Report someone';
export const options: ApplicationCommandOption[] = [
	{
		name: 'user',
		description: 'The user to report',
		type: 'USER',
		required: true,
	},
	{
		name: 'reason',
		description: "The reason they're being reported",
		type: 'STRING',
		required: true,
	},
];

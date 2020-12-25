import { Anything } from '../../interfaces/Anything';
import { RunFunction } from '../../interfaces/Command';
import { GuildChannel, TextChannel, Message } from 'discord.js';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description:
						"If you're going to reoprt someone you may as well specify some arguments! Usage: <user> <...reason>",
				},
				message
			)
		);
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	if (!GuildConfig || !(GuildConfig as Anything)?.ReportChannel)
		return message.channel.send(
			client.embed(
				{
					description:
						"This guild hasn't setup a report channel! Ask an admin to set it up!",
				},
				message
			)
		);
	if (!client.utils.ResolveMember(message, args[0]))
		return message.channel.send(
			client.embed({ description: 'Please mention someone!' }, message)
		);
	if (!args.slice(1).length)
		return message.channel.send(
			client.embed(
				{ description: 'Please specify a reason for the report!' },
				message
			)
		);
	const channel: GuildChannel = message.guild.channels.cache.get(
		(GuildConfig as Anything).ReportChannel
	);
	if (!channel)
		return message.channel.send(
			client.embed(
				{ description: "Hey... That channel doesn't exist?" },
				message
			)
		);
	let m: Message;
	try {
		m = await message.channel.send(
			client.embed(
				{
					description: `
                        **Are you sure you want to report** **${
													client.utils.ResolveMember(message, args[0])
														.displayName
												}**?
    
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
		await m.delete();
	}
	if (!channel?.permissionsFor(message.guild.me)?.has('SEND_MESSAGES'))
		return message.channel.send(
			client.embed(
				{
					description: `I can't send messages in ${channel}!`,
				},
				message
			)
		);
	await (channel as TextChannel).send(
		client.embed(
			{
				fields: [
					{
						name: 'Reporter',
						value: `${message.member.displayName} (${message.author.id})`,
						inline: true,
					},
					{
						name: 'Reported',
						value: `${
							client.utils.ResolveMember(message, args[0]).displayName
						} (${client.utils.ResolveMember(message, args[0]).id})`,
						inline: true,
					},
					{
						name: 'Reason',
						value: args.slice(1).join(' '),
					},
				],
				timestamp: Date.now(),
			},
			message
		)
	);
	return message.react('🚀');
};
export const usage: string = '<user> <...reason>';
export const name: string = 'report';
export const category: string = 'moderation';
export const description: string = 'Report someone';

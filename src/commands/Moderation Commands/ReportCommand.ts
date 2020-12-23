import { Anything } from '../../interfaces/Anything';
import { RunFunction } from '../../interfaces/Command';
import { GuildChannel, TextChannel } from 'discord.js';
import { EMSGSIZE } from 'constants';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return await message.channel.send(
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
		return await message.channel.send(
			client.embed(
				{
					description:
						"This guild hasn't setup a report channel! Ask an admin to set it up!",
				},
				message
			)
		);
	if (!client.utils.ResolveMember(message, args[0]))
		return await message.channel.send(
			client.embed({ description: 'Please mention someone!' }, message)
		);
	if (!args.slice(1).length)
		return await message.channel.send(
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
	if (!channel?.permissionsFor(message.guild.me)?.has('SEND_MESSAGES'))
		return await message.channel.send(
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
						inline: true,
					},
				],
				timestamp: Date.now(),
			},
			message
		)
	);
	return await message.react('🚀');
};
export const usage: string = '<user> <...reason>';
export const name: string = 'report';
export const category: string = 'moderation';

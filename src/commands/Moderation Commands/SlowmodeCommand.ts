import { RunFunction } from '../../interfaces/Command';
import ms from 'ms';
import { TextChannel } from 'discord.js';
export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed({ description: 'Please specify a time!' }, message)
		);
	let time: number;
	time = ms(args[0]);
	if (!time) time = parseInt(ms(time || 0), 10);
	if (!time || isNaN(time))
		return message.channel.send(
			client.embed(
				{
					description:
						"That number didn't go through correctly, try again with a valid time! The correct usage is <time> <...message>",
				},
				message
			)
		);
	if (!time)
		return message.channel.send(
			client.embed(
				{
					description:
						"That number didn't go through correctly, try again with a valid time!",
				},
				message
			)
		);
	if (time > ms('6h') || ms('1s') > time)
		return message.channel.send(
			client.embed(
				{
					description:
						'Make sure the slowmode is greater then 1 second and less then 6 hours!',
				},
				message
			)
		);

	if (!message.guild.me.permissions.has('MANAGE_CHANNELS'))
		return message.channel.send(
			client.embed({ description: 'I need MANAGE_CHANNELS.' }, message)
		);
	await (message.channel as TextChannel).setRateLimitPerUser(
		Math.floor(time / 1000)
	);
	return message.react('🚀');
};
export const name: string = 'slowmode';
export const category: string = 'moderation';
export const description: string = 'Set slowmode on a channel';
export const userPermissions: string[] = ['MANAGE_GUILD'];

import { TextChannel } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return await message.channel.send(
			client.embed(
				{
					description:
						"Please specify how many messages you'd like to purge, 1-100!",
				},
				message
			)
		);
	if (
		isNaN(parseInt(args[0])) ||
		parseInt(args[0]) < 0 ||
		parseInt(args[0]) > 100
	)
		return await message.channel.send(
			client.embed(
				{
					description:
						'Please provide a valid number & a number that is between 1-100!',
				},
				message
			)
		);
	await message.delete();
	await (message.channel as TextChannel).bulkDelete(parseInt(args[0]));
};
export const name: string = 'purge';
export const category: string = 'moderation';
export const userPermissions: string = 'MANAGE_MESSAGES';
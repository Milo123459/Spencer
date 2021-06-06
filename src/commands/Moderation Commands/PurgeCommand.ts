import { Message, TextChannel, Collection } from 'discord.js';
import ms from 'ms';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description:
						"Please specify how many messages you'd like to purge, 1-100!",
				},
				message
			)
		);
	if (
		isNaN(parseInt(args[0], 10)) ||
		parseInt(args[0], 10) < 0 ||
		parseInt(args[0], 10) > 100
	)
		return message.channel.send(
			client.embed(
				{
					description:
						'Please provide a valid number & a number that is between 1-100!',
				},
				message
			)
		);
	try {
		await message.delete();
	} catch {}
	const messages: Collection<string, Message> =
		await message.channel.messages.fetch({ limit: parseInt(args[0], 10) });
	await (message.channel as TextChannel).bulkDelete(
		messages.filter(
			(value: Message) => Date.now() - value.createdTimestamp < ms('14d')
		)
	);
};
export const name: string = 'purge';
export const category: string = 'moderation';
export const userPermissions: string = 'MANAGE_MESSAGES';
export const description: string = 'Bulk delete a specific amount of messages';

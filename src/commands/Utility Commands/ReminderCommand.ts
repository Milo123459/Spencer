import { RunFunction } from '../../interfaces/Command';
import ms from 'ms';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed({ description: 'Please specify a time!' }, message)
		);
	if (!args[1])
		return message.channel.send(
			client.embed({ description: 'Please specify a message!' }, message)
		);
	let time: number;
	time = ms(args[0]);
	if (!time) time = parseInt(ms(time || 0));
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
	if (time > ms('30d'))
		return message.channel.send(
			client.embed(
				{ description: "You can't set a reminder for more then 30 days!" },
				message
			)
		);
	const ReminderSchema = await client.db.load('reminder');
	await ReminderSchema.create({
		User: message.author.id,
		Message: args.slice(1).join(' '),
		Time: Date.now() + time,
	});
	await message.channel.send(
		client.embed(
			{
				description:
					"Done, please make sure you're DMs are open! Note: Reminders are checked every minute, so if you set something less then a minute, you may be waiting a bit longer!",
			},
			message
		)
	);
};
export const name: string = 'reminder';
export const category: string = 'utility';

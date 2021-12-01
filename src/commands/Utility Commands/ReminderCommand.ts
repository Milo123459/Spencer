import { RunFunction } from '../../interfaces/Command';
import ms from 'ms';
import { ApplicationCommandOption } from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const msg = interaction.options.get('message', true).value as string;
	let time: number;
	time = ms(interaction.options.get('time', true).value as string);
	if (!time) time = parseInt(ms(time || 0), 10);
	if (!time || isNaN(time))
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							"That number didn't go through correctly, try again with a valid time! The correct usage is <time> <...message>",
					},
					interaction
				),
			],
            ephemeral: true
		});
	if (!time)
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							"That number didn't go through correctly, try again with a valid time!",
					},
					interaction
				),
			],
            ephemeral: true
		});
	if (time > ms('30d') && !client.config.owners.includes(interaction.user.id))
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: "You can't set a reminder for more then 30 days!" },
					interaction
				),
			],
            ephemeral: true
		});
	const ReminderSchema = await client.db.load('reminder');
	await ReminderSchema.create({
		User: interaction.user.id,
		Message: msg,
		Time: Date.now() + time,
		Guild: interaction.guild.id,
	});
	await interaction.reply({
		embeds: [
			client.embed(
				{
					description:
						'Done, please make sure your DMs are open! Note: Reminders are checked every minute, so if you set something less then a minute, you may be waiting a bit longer!',
				},
				interaction
			),
		],
        ephemeral: true
	});
};
export const name: string = 'reminder';
export const category: string = 'utility';
export const description: string = 'Set a reminder';
export const options: ApplicationCommandOption[] = [
	{
		name: 'time',
		description: 'The delay for me to send you the reminder',
		type: 'STRING',
		required: true,
	},
	{
		name: 'message',
		description: 'The reminder message',
		type: 'STRING',
		required: true,
	},
];

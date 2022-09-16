import { RunFunction } from '../../interfaces/Command';
import ms from 'ms';
import {
	ApplicationCommandOption,
	ApplicationCommandStringOption,
} from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const msg = interaction.options.get('message', true).value as string;
	let time: number;
	time = ms(interaction.options.get('time', true).value as string);
	if (!time) time = parseInt(ms(time || 0), 10);
	if (!time || isNaN(time))
		return interaction.reply({
			content: 'failure',
			ephemeral: true,
		});
	if (!time)
		return interaction.reply({
			content: "number didn't go through well give it a shot again",
			ephemeral: true,
		});
	if (time > ms('365d') && !client.config.owners.includes(interaction.user.id))
		return interaction.reply({
			content: "you can't set a reminder for that long",
			ephemeral: true,
		});
	const ReminderSchema = await client.db.load('reminder');
	await ReminderSchema.create({
		User: interaction.user.id,
		Message: msg,
		Time: Date.now() + time,
		Guild: interaction.guild.id,
	});
	await interaction.reply({
		content: 'done',
		ephemeral: true,
	});
};
export const name: string = 'reminder';
export const category: string = 'utility';
export const description: string = 'Set a reminder';
export const options: ApplicationCommandOption[] = [
	{
		name: 'time',
		description: 'The delay for me to send you the reminder',
		required: true,
	} as ApplicationCommandStringOption,
	{
		name: 'message',
		description: 'The reminder message',
		required: true,
	} as ApplicationCommandStringOption,
];

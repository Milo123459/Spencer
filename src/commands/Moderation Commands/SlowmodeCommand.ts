import { RunFunction } from '../../interfaces/Command';
import ms from 'ms';
import { ApplicationCommandOption, TextChannel } from 'discord.js';
export const run: RunFunction = async (client, interaction) => {
	let clear: boolean = false;
	const tme = interaction.options.get('time', true).value as string;
	if (tme.toLowerCase() == 'clear') clear = true;
	console.log(clear);
	let time: number;
	time = ms(tme);
	if (!time) time = parseInt(ms(time || 0), 10);
	if ((!time || isNaN(time)) && clear == false)
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							"That number didn't go through correctly, try again with a valid time! The correct usage is <time | clear>",
					},
					interaction
				),
			],
		});
	if (!time && clear == false)
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
		});
	if ((time > ms('6h') || ms('1s') > time) && clear == false)
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							'Make sure the slowmode is greater then 1 second and less then 6 hours!',
					},
					interaction
				),
			],
		});

	if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS'))
		return interaction.reply({
			embeds: [
				client.embed({ description: 'I need MANAGE_CHANNELS.' }, interaction),
			],
		});
	await (interaction.channel as TextChannel).setRateLimitPerUser(
		clear == true ? 0 : Math.floor(time / 1000)
	);
};
export const name: string = 'slowmode';
export const category: string = 'moderation';
export const description: string = 'Set slowmode on a channel';
export const userPermissions: string[] = ['MANAGE_GUILD'];
export const usage: string = '<time | clear>';
export const options: ApplicationCommandOption[] = [
	{
		name: 'time',
		description: 'The time to set slowmode to. use "clear" to clear.',
		type: 'STRING',
		required: true,
	},
];

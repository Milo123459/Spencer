import {
	Message,
	TextChannel,
	Collection,
	ApplicationCommandOption,
} from 'discord.js';
import ms from 'ms';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	const count = interaction.options.get('messagecount', true).value as string;
	if (
		isNaN(parseInt(count, 10)) ||
		parseInt(count, 10) < 0 ||
		parseInt(count, 10) > 100
	)
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							'Please provide a valid number & a number that is between 1-100!',
					},
					interaction
				),
			],
			ephemeral: true,
		});
	await (interaction.channel as TextChannel).bulkDelete(parseInt(count));
};
export const name: string = 'purge';
export const category: string = 'moderation';
export const userPermissions: string = 'MANAGE_MESSAGES';
export const description: string = 'Bulk delete a specific amount of messages';
export const options: ApplicationCommandOption[] = [
	{
		name: 'messagecount',
		description: 'The count of messages I should purge',
		type: 'STRING',
		required: true,
	},
];

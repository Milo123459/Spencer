import { RunFunction } from '../../interfaces/Command';

import ms from 'ms';

export const run: RunFunction = async (client, interaction) => {
	const EconomySchema = await client.db.load('usereconomy');
	const UserProfile = await EconomySchema.findOne({
		User: interaction.user.id,
	});
	if (
		!(UserProfile as any)?.Daily ||
		Date.now() >= (UserProfile as any).Daily
	) {
		await EconomySchema.update(
			{ User: interaction.user.id },
			{ Daily: Date.now() + ms('1d') }
		);
		let coinsToGive: number = 4000;
		if (
			(UserProfile as any)?.VoteReminder &&
			(await client.topGGApi.hasVoted(interaction.user.id))
		) {
			coinsToGive += 1000;
		}
		await EconomySchema.increment(
			{ User: interaction.user.id },
			'Coins',
			coinsToGive
		);
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description: `Placed ${coinsToGive} coins in your account.\nDid you know you can earn 5000 coins rather then 4000 by following these simple steps!\n/config votereminder true\n...and make sure you have voted in the last 12 hours!`,
					},
					interaction
				),
			],
		});
	} else {
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description: `You can use this command again in \`${client.utils.formatMS(
							(UserProfile as any).Daily - Date.now()
						)}\`.`,
					},
					interaction
				),
			],
		});
	}
};
export const name: string = 'daily';
export const category: string = 'economy';
export const description: string = 'Get some money... daily';
export const options: import("discord.js").ApplicationCommandOption[] = []
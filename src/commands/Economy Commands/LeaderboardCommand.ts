import { RunFunction } from '../../interfaces/Command';

import { Document } from 'mongoose';
import { emojis } from '../../static/Emojis';
import { Util } from 'discord.js';
import { addProp } from 'tyvn';

export const run: RunFunction = async (client, interaction) => {
	const EconomySchema = await client.db.load('usereconomy');
	const Leaderboard = await EconomySchema.leaderboard(
		(a: any, b: any) =>
			addProp<any>(['Coins', 'DepositedCoins'], 0, 0, b) -
			addProp<any>(['Coins', 'DepositedCoins'], 0, 0, a)
	);
	const UserProfile = await EconomySchema.findOne({
		User: interaction.user.id,
	});
	if (!UserProfile)
		await EconomySchema.update(
			{ User: interaction.user.id },
			{ DepositedCoins: 0, Coins: 0 }
		);
	const massive: Array<Document> = [...(await EconomySchema.find({}))].sort(
		(a: any, b: any) =>
			addProp<any>(['Coins', 'DepositedCoins'], 0, 0, b) -
			addProp<any>(['Coins', 'DepositedCoins'], 0, 0, a)
	);
	const userPosition: number = massive
		.map((value: Document, index: number) =>
			(value as any).User == interaction.user.id ? index + 1 : 0
		)
		.filter((value: number) => value != 0)[0];
	return interaction.reply({
		embeds: [
			client.embed(
				{
					description: `${Leaderboard.map(
						(value: Document, index: number) =>
							`${emojis[`medal${index + 1}`]} **${Util.escapeMarkdown(
								client.users.cache.get((value as any).User)?.tag ||
									'Unknown user#0000'
							)}** \`${addProp<any>(
								['Coins', 'DepositedCoins'],
								0,
								0,
								value
							).toLocaleString()} coins\`.`
					).join('\n')}\n${
						userPosition > 10
							? `${userPosition} - **You** - \`${addProp<any>(
									['Coins', 'DepositedCoins'],
									0,
									0,
									UserProfile
							  ).toLocaleString()} coins\`.`
							: ''
					}\nNote, the money is in how much they have in their wallet & bank!`,
				},
				interaction
			),
		],
	});
};

export const name: string = 'leaderboard';
export const category: string = 'economy';
export const description: string = 'View the top users on the economy';
export const aliases: string[] = ['leaders', 'lb'];
export const options: import("discord.js").ApplicationCommandOption[] = []
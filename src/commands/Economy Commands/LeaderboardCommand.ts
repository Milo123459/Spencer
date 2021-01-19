import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { Document } from 'mongoose';
import { Util } from 'discord.js';
import { addProp } from 'tyvn';

export const run: RunFunction = async (client, message, args) => {
	const EconomySchema = await client.db.load('usereconomy');
	const Leaderboard = await EconomySchema.leaderboard(
		(a: Anything, b: Anything) =>
			addProp<Anything>(['Coins', 'DepositedCoins'], 0, 0, b) -
			addProp<Anything>(['Coins', 'DepositedCoins'], 0, 0, a)
	);
	const UserProfile = await EconomySchema.findOne({ User: message.author.id });
	if (!UserProfile)
		await EconomySchema.update(
			{ User: message.author.id },
			{ DepositedCoins: 0, Coins: 0 }
		);
	const massive: Array<Document> = [...(await EconomySchema.find({}))].sort(
		(a: Anything, b: Anything) =>
			addProp<Anything>(['Coins', 'DepositedCoins'], 0, 0, b) -
			addProp<Anything>(['Coins', 'DepositedCoins'], 0, 0, a)
	);
	const userPosition: number = massive
		.map((value: Document, index: number) =>
			(value as Anything).User == message.author.id ? index + 1 : 0
		)
		.filter((value: number) => value != 0)[0];
	return message.channel.send(
		client.embed(
			{
				description: `${Leaderboard.map(
					(value: Document, index: number) =>
						`${index + 1} - ${Util.escapeMarkdown(
							client.users.cache.get((value as Anything).User)?.tag ||
								'Unknown user'
						)} - \`${addProp<Anything>(
							['Coins', 'DepositedCoins'],
							0,
							0,
							value
						).toLocaleString()} coins.\``
				).join('\n')}\n${
					userPosition > 10
						? `${userPosition} - ${message.author.tag} - \`${addProp<Anything>(
								['Coins', 'DepositedCoins'],
								0,
								0,
								UserProfile
						  ).toLocaleString()} coins.\``
						: ''
				}\nNote, the money is in how much they have in their wallet & bank!`,
			},
			message
		)
	);
};

export const name: string = 'leaderboard';
export const category: string = 'economy';
export const description: string = 'View the top users on the economy';

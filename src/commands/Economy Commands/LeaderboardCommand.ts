import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { Document } from 'mongoose';
import { Util } from 'discord.js';

export const run: RunFunction = async (client, message, args) => {
	const EconomySchema = await client.db.load('usereconomy');
	const Leaderboard = await EconomySchema.leaderboard(
		(a: Anything, b: Anything) =>
			b.Coins + (b?.DepositedCoins || 0) - a.Coins + (a?.DepositedCoins || 0)
	);
	const UserProfile = await EconomySchema.findOne({ User: message.author.id });
	if (!UserProfile)
		await EconomySchema.update(
			{ User: message.author.id },
			{ DepositedCoins: 0, Coins: 0 }
		);
	const massive: Array<Document> = [...(await EconomySchema.find({}))].sort(
		(a: Anything, b: Anything) =>
			b.Coins + (b?.DepositedCoins || 0) - a.Coins + (a?.DepositedCoins || 0)
	);
	const userPosition: number = massive
		.map((value: Document, index: number) =>
			(value as Anything).User == message.author.id ? index + 1 : 0
		)
		.filter((value: number) => value != 0)[0];
	return await message.channel.send(
		client.embed(
			{
				description: `${Leaderboard.map(
					(value: Document, index: number) =>
						`${index + 1} - ${Util.escapeMarkdown(
							client.users.cache.get((value as Anything).User)?.tag ||
								'Unknown user'
						)} - \`${(value as Anything).Coins?.toLocaleString() || 0} coins.\``
				).join('\n')}\n${
					userPosition > 10
						? `${userPosition} - ${message.author.tag} - \`${
								UserProfile ? (UserProfile as Anything).Coins : 0
						  } coins.\``
						: ''
				}\nNote, the money is in how much they total! Wallet + bank`,
			},
			message
		)
	);
};

export const name: string = 'leaderboard';
export const category: string = 'economy';

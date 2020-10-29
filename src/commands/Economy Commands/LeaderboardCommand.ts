import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { Document } from 'mongoose';
export const run: RunFunction = async (client, message) => {
	const EconomySchema = await client.db.load('usereconomy');
	const Leaderboard = await EconomySchema.leaderboard(
		(a: Anything, b: Anything) => b.Coins - a.Coins
	);
	await message.channel.send(
		client.embed(
			{
				description: `${Leaderboard.map(
					(value: Document, index: number) =>
						`${index + 1} - ${
							client.users.cache.get((value as Anything).User)?.tag ||
							'Unkown user'
						} - \`${(value as Anything).Coins.toLocaleString()} coins.\``
				).join('\n')}`,
			},
			message
		)
	);
};

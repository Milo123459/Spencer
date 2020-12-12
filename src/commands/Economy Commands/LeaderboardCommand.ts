import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { Document } from 'mongoose';
import { Util } from 'discord.js';

export const run: RunFunction = async (client, message) => {
	const EconomySchema = await client.db.load('usereconomy');
	const Leaderboard = await EconomySchema.leaderboard(
		(a: Anything, b: Anything) => b.Coins - a.Coins
	);
	const you: Document = Leaderboard.filter(
		(value: Document) => (value as Anything).User == message.author.id
	)[0];
	await message.channel.send(
		client.embed(
			{
				description: `${Leaderboard.map(
					(value: Document, index: number) =>
						`${index + 1} - ${Util.escapeMarkdown(
							client.users.cache.get((value as Anything).User)?.tag ||
								'Unknown user'
						)} - \`${(value as Anything).Coins.toLocaleString()} coins.\``
				).join(
					'\n'
				)}\n\nYou - ${Leaderboard.map((value: Document, index: number) =>
					(value as Anything).User == message.author.id ? index + 1 : 0
				).filter((value: number) => value != 0)} - \`${
					(you as Anything)?.Coins.toLocaleString() || 0
				} coins.\``,
			},
			message
		)
	);
};

export const name: string = 'leaderboard';
export const category: string = 'economy';

import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import ms from 'ms';

export const run: RunFunction = async (client, message) => {
	const EconomySchema = await client.db.load('usereconomy');
	const UserProfile = await EconomySchema.findOne({ User: message.author.id });
	if (
		!(UserProfile as Anything)?.Daily ||
		Date.now() >= (UserProfile as Anything).Daily
	) {
		await EconomySchema.update(
			{ User: message.author.id },
			{ Daily: Date.now() + ms('1d') }
		);
		let coinsToGive: number = 4000;
		if (
			(UserProfile as Anything)?.VoteReminder &&
			(await client.topGGApi.hasVoted(message.author.id))
		) {
			coinsToGive += 1000;
		}
		await EconomySchema.increment(
			{ User: message.author.id },
			'Coins',
			coinsToGive
		);
		return message.channel.send(
			client.embed(
				{
					description: `Placed ${coinsToGive} coins in your account.\nDid you know you can earn 5000 coins rather then 4000 by following these simple steps!\n[prefix]config votereminder true\n...and make sure you have voted in the last 12 hours!`,
				},
				message
			)
		);
	} else {
		return message.channel.send(
			client.embed(
				{
					description: `You can use this command again in \`${client.utils.formatMS(
						(UserProfile as Anything).Daily - Date.now()
					)}\`.`,
				},
				message
			)
		);
	}
};
export const name: string = 'daily';
export const category: string = 'economy';
export const description: string = 'Get some money... daily';

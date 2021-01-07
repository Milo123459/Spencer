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
			(await client.topGGApi.getVotes()).filter(
				(value) => value.id == message.author.id
			).length
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
				{ description: 'Placed 2000 coins in your account.' },
				message
			)
		);
	} else {
		return message.channel.send(
			client.embed(
				{
					description: `You can use this command again in \`${ms(
						(UserProfile as Anything).Daily - Date.now(),
						{ long: true }
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

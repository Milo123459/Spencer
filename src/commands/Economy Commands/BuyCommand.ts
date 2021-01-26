import { Anything } from '../../interfaces/Anything';
import { RunFunction } from '../../interfaces/Command';
import { items } from '../../static/Items';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description: `Please provide a valid item id! Don't know what to buy? ${await client.utils.getPrefix(
						message.guild.id
					)}shop is for you.`,
				},
				message
			)
		);
	const item = items.find(
		(value) => value.id.toLowerCase() == args[0].toLowerCase()
	);
	const amount = args[1] ? parseInt(args[1], 10) : 1;
	if (!item)
		return message.channel.send(
			client.embed({ description: "I couldn't find that item." }, message)
		);
	const UserEconomy = await client.db.load('usereconomy');
	const UserProfile = await UserEconomy.findOne({ User: message.author.id });
	if (!(((UserProfile as Anything)?.Coins || 0) >= item.price * amount))
		return message.channel.send(
			client.embed(
				{
					description: `You don't have enough money for that. You need ${(
						item.price * amount
					).toLocaleString()} coins to buy ${amount}!`,
				},
				message
			)
		);
	await UserEconomy.decrement(
		{ User: message.author.id },
		'Coins',
		item.price * amount
	);
	for (let i = 0; i < amount; i++) {
		await client.utils.incrementItem(message.author.id, item.id);
	}
	return message.channel.send(
		client.embed(
			{
				description: `You bought ${amount} ${
					amount > 1 ? `${item.name}s` : item.name
				}`,
			},
			message
		)
	);
};

export const usage: string = '<item id> [amount]';
export const name: string = 'buy';
export const category: string = 'economy';
export const description: string = 'Buy something from the shop.';

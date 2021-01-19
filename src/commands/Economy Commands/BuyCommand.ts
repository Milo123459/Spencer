import { Anything } from '../../interfaces/Anything';
import { RunFunction } from '../../interfaces/Command';
import { items } from '../../static/Items';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description:
						"Please provide a valid item id! Don't know what to buy? sp!shop is for you.",
				},
				message
			)
		);
	const item = items.find(
		(value) => value.id.toLowerCase() == args.join(' ').toLowerCase()
	);
	if (!item)
		return message.channel.send(
			client.embed({ description: "I couldn't find that item." }, message)
		);
	const UserEconomy = await client.db.load('usereconomy');
	const UserProfile = await UserEconomy.findOne({ User: message.author.id });
	if (!(((UserProfile as Anything)?.Coins || 0) >= item.price))
		return message.channel.send(
			client.embed(
				{
					description: `You don't have enough money for that. You need ${item.price} coins!`,
				},
				message
			)
		);
	await UserEconomy.decrement({ User: message.author.id }, 'Coins', item.price);
	await client.utils.incrementItem(message.author.id, item.id);
	return message.channel.send(
		client.embed({ description: `You bought one ${item.name}` }, message)
	);
};

export const usage: string = '<...item id>';
export const name: string = 'buy';
export const category: string = 'economy';
export const description: string = 'A cool command';

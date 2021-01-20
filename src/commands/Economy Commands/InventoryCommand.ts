import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { items } from '../../static/Items';
import { Item } from '../../interfaces/Item';
import pagination from '../../utils/Pagination';
import { limitArray } from 'tyvn';

export const run: RunFunction = async (client, message, args) => {
	const UserEconomy = await client.db.load('usereconomy');
	const User =
		client.utils.ResolveMember(message, args[0])?.id || message.author.id;
	const Profile = await UserEconomy.findOne({ User: User });
	const Inventory = (Profile as Anything)?.Inventory || {};

	return pagination(
		message,
		limitArray<[string, any]>(Object.entries(Inventory), 5).map((value) =>
			client.embed(
				{
					fields: value.map((value) => {
						return {
							name: `${
								items.find((value_: Item) => value_.id == value[0]).name
							}`,
							value: `${User == message.author.id ? 'You have' : 'They have'} ${
								value[1]
							} ${items
								.find((value_: Item) => value_.id == value[0])
								.name.toLowerCase()}s.`,
						};
					}),
					description: 'Use sp!buy <item-id> to buy items!',
				},
				message
			)
		),
		['⏪', '⏩'],
		30000
	);
};
export const name: string = 'inventory';
export const category: string = 'economy';
export const description: string = 'View your inventory';
export const aliases: string[] = ['inv'];
export const usage: string = '[user]';

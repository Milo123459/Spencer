import { RunFunction } from '../../interfaces/Command';

import { items } from '../../static/Items';
import { Item } from '../../interfaces/Item';
import pagination from '../../utils/Pagination';
import { limitArray } from 'tyvn';

export const run: RunFunction = async (client, interaction) => {
	const UserEconomy = await client.db.load('usereconomy');
	const user = (
		await interaction.guild.members.fetch(
			(interaction.options.get('user')?.value as string) || interaction.user.id
		)
	).user;
	const User = user.id;
	const Profile = await UserEconomy.findOne({ User: User });
	const Inventory = (Profile as any)?.Inventory || {};
	return pagination(
		interaction,
		limitArray<[string, any]>(Object.entries(Inventory), 5).map((value) =>
			client.embed(
				{
					fields: value.map((value) => {
						return {
							name: `${
								items.find((value_: Item) => value_.id == value[0]).name
							}`,
							value: `${
								User == interaction.user.id ? 'You have' : 'They have'
							} ${value[1]} ${items
								.find((value_: Item) => value_.id == value[0])
								.name.toLowerCase()}s.`,
						};
					}),
					description: `${user.tag}'s inventory\nUse /buy <item-id> to buy items!`,
				},
				interaction
			)
		),
		['⏪', '⏩'],
		30000
	);
};
export const name: string = 'inventory';
export const category: string = 'economy';
export const description: string = "View your or someone else's inventory";
export const aliases: string[] = ['inv'];
export const usage: string = '[user]';
export const options: import('discord.js').ApplicationCommandOption[] = [
	{
		type: 'USER',
		name: 'user',
		description: "Check someone else's inventory",
	},
];

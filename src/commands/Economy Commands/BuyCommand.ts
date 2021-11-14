import { ApplicationCommandOption } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
import { items } from '../../static/Items';

export const run: RunFunction = async (client, interaction) => {
	const item = items.find(
		(value) =>
			value.id.toLowerCase() ==
			(interaction.options.get('id', true).value as string).toLowerCase()
	);
	const amount = interaction.options.get('amount', true).value
		? parseInt(interaction.options.get('amount', true).value as string, 10)
		: 1;
	if (!item)
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: "I couldn't find that item." },
					interaction
				),
			],
		});
	const UserEconomy = await client.db.load('usereconomy');
	const UserProfile = await UserEconomy.findOne({ User: interaction.user.id });
	if (!(((UserProfile as any)?.Coins || 0) >= item.price * amount))
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description: `You don't have enough money for that. You need ${(
							item.price * amount
						).toLocaleString()} coins to buy ${amount}!`,
					},
					interaction
				),
			],
		});
	if (item.unique == true) {
		if (
			((UserProfile as any)?.Inventory || {})?.[item.id] &&
			((UserProfile as any)?.Inventory || {})?.[item.id] >= 1
		)
			return interaction.reply({
				embeds: [
					client.embed(
						{
							description: `You already have a **${item.name}**! This item is unique so you can only have 1.`,
						},
						interaction
					),
				],
			});
	}
	if (item.unique == true && amount > 1)
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: `You can not buy more then 1 of **${item.name}**!` },
					interaction
				),
			],
		});
	await UserEconomy.decrement(
		{ User: interaction.user.id },
		'Coins',
		item.price * amount
	);
	for (let i = 0; i < amount; i++) {
		await client.utils.incrementItem(interaction.user.id, item.id);
	}
	return interaction.reply({
		embeds: [
			client.embed(
				{
					description: `You bought ${amount} ${
						amount > 1 ? `${item.name}s` : item.name
					}`,
				},
				interaction
			),
		],
	});
};

export const usage: string = '<item id> [amount]';
export const name: string = 'buy';
export const category: string = 'economy';
export const description: string = 'Buy something from the shop.';
export const options: ApplicationCommandOption[] = [
	{
		name: 'id',
		description: 'The ID of your item',
		type: 'STRING',
		required: true,
	},
	{
		name: 'amount',
		description: 'The amouunt you need',
		type: 'STRING',
	},
];

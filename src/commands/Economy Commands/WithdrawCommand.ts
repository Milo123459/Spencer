import { ApplicationCommandOption } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	const amount = await client.utils.calculateMoney(
		interaction.user.id,
		interaction.options.get('amount', true).value as string,
		'DepositedCoins'
	);
	const EconomySchema = await client.db.load('usereconomy');
	await EconomySchema.increment({ User: interaction.user.id }, 'Coins', amount);
	await EconomySchema.decrement(
		{ User: interaction.user.id },
		'DepositedCoins',
		amount
	);
	return interaction.reply({
		embeds: [
			client.embed(
				{ description: `Withdrew \`$${amount}\` into your wallet!` },
				interaction
			),
		],
	});
};

export const aliases: string[] = ['with'];
export const name: string = 'withdraw';
export const category: string = 'economy';
export const usage: string = '<amount>';
export const description: string = 'Withdraw some money from the bank';
export const options: ApplicationCommandOption[] = [
	{
		name: 'amount',
		description: "You don't need a description for this",
		type: 'STRING',
	},
];

import { ApplicationCommandOption } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	const amount = await client.utils.calculateMoney(
		interaction.user.id,
		interaction.options.get('amount', true).value as string,
		'Coins'
	);
	const EconomySchema = await client.db.load('usereconomy');
	await EconomySchema.increment(
		{ User: interaction.user.id },
		'DepositedCoins',
		amount
	);
	await EconomySchema.decrement({ User: interaction.user.id }, 'Coins', amount);
	return interaction.reply({
		embeds: [
			client.embed(
				{ description: `Deposited \`$${amount}\` into your bank!` },
				interaction
			),
		],
	});
};

export const aliases: string[] = ['dep'];
export const name: string = 'deposit';
export const category: string = 'economy';
export const usage: string = '<amount>';
export const description: string = 'Deposit some coins to the bank';
export const options: ApplicationCommandOption[] = [
	{
		name: 'amount',
		description: 'The amount you want to deposit',
		type: 'STRING',
		required: true,
	},
];

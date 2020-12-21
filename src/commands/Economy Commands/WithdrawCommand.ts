import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed({ description: 'Please provide an actual amount' }, message)
		);
	const amount = await client.utils.calculateMoney(
		message.author.id,
		args[0],
		'DepositedCoins'
	);
	const EconomySchema = await client.db.load('usereconomy');
	await EconomySchema.increment({ User: message.author.id }, 'Coins', amount);
	await EconomySchema.decrement(
		{ User: message.author.id },
		'DepositedCoins',
		amount
	);
	return await message.channel.send(
		client.embed(
			{ description: `Withdrew \`$${amount}\` into your wallet!` },
			message
		)
	);
};

export const aliases: string[] = ['with'];
export const name: string = 'withdraw';
export const category: string = 'economy';
export const usage: string = '<amount>';

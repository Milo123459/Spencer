import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed({ description: 'Please provide an actual amount' }, message)
		);
	const amount = await client.utils.calculateMoney(
		message.author.id,
		args[0],
		'Coins'
	);
	const EconomySchema = await client.db.load('usereconomy');
	await EconomySchema.increment(
		{ User: message.author.id },
		'DepositedCoins',
		amount
	);
	await EconomySchema.decrement({ User: message.author.id }, 'Coins', amount);
	return await message.channel.send(
		client.embed(
			{ description: `Deposited \`$${amount}\` into your bank!` },
			message
		)
	);
};

export const aliases: string[] = ['dep'];
export const name: string = 'deposit';
export const category: string = 'economy';
export const description: string = 'A cool command';

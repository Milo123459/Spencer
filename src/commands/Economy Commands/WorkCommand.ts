import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
export const name: string = 'work';
export const run: RunFunction = async (client, message) => {
	const Rate: number = Math.floor(Math.random() * 300);
	const EconomySchema = await client.db.load('usereconomy');
	const NewData = await EconomySchema.increment(
		{ User: message.author.id },
		'Coins',
		Rate
	);
	await message.channel.send(`${(NewData as Anything).Coins} - ${Rate}`);
};
export const category: string = 'economy';
export const cooldown: number = 5000;

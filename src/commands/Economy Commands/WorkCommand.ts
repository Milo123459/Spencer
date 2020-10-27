import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { Message, MessageCollector } from 'discord.js';
export const name: string = 'work';
export const run: RunFunction = async (client, message) => {
	const Rate: number = Math.floor(Math.random() * 300);
	const EconomySchema = await client.db.load('usereconomy');
	const Jobs: string[] = ['Footballer' /*'Programmer', 'YouTuber' */];
	const Job: string = Jobs[Math.floor(Math.random() * Jobs.length)];
	if (Job == 'Footballer') {
		// create a game
		const Game: Array<string[]> = [
			['🥅', '🥅', '🥅'],
			/*line 1*/ [].fill(''),
			/*line 2*/ [].fill(''),
			/*line 3*/ [].fill('') /*line 4*/,
		];
		// valid inputs
		const ValidInputs: string[] = ['left', 'center', 'right'];
		// assign where the football and goal keeper should be
		const Detective: number = Math.floor(Math.random() * Game[1].length);
		Game[1][Detective] = '🕵️‍♂️';
		const Football: number = Math.floor(Math.random() * Game[2].length);
		Game[3][Football] = '⚽';
		// handle imput
		await message.channel.send(
			`${Game.map((value: string[]) => value.join('')).join('\n')}`,
			client.embed(
				{
					description: `*You're in a football match, about to score... But where do you go? **left**, **right** or **center**.*`,
				},
				message
			)
		);
		const messageCollector: MessageCollector = message.channel.createMessageCollector(
			(m: Message) => m.author.id == message.author.id,
			{ time: 5000, max: 1 }
		);
		messageCollector.on('collect', (msg: Message) => {});
	}
	const NewData = await EconomySchema.increment(
		{ User: message.author.id },
		'Coins',
		Rate
	);
	//await message.channel.send(client.embed({ description: `` }));
};
export const category: string = 'economy';
export const cooldown: number = 30000; // 30 seconds

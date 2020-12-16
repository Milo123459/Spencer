import { RunFunction } from '../../interfaces/Command';
import { Message, MessageCollector, Collection } from 'discord.js';
import { Anything } from '../../interfaces/Anything';

export const name: string = 'work';
export const run: RunFunction = async (client, message) => {
	const EconomySchema = await client.db.load('usereconomy');
	const User = await EconomySchema.findOne({ User: message.author.id });
	if (!(User as Anything)?.Job)
		return await message.channel.send(
			client.embed(
				{
					description:
						"Wait a minute, you haven't got a job, and you are trying to work? Talk about stupid. Set a job using `sp!setjob`.",
				},
				message
			)
		);
	// decide a job
	const Job: string = (User as Anything).Job;
	// function to add money to user
	const giveMoney = async (User: string, Coins: number) => {
		return await EconomySchema.increment({ User }, 'Coins', Coins);
	};
	if (Job == 'Footballer') {
		// create a game
		const Game: Array<string[]> = [
			/* line 1*/ ['🥅', '🥅', '🥅'],
			/*line 2*/ new Array(3).fill(':black_large_square:'),
			/*line 3*/ new Array(3).fill(':black_large_square:'),
			/*line 4*/ new Array(3).fill(':black_large_square:'),
		];
		// valid inputs
		const validInputs: string[] = ['left', 'middle', 'right', 'l', 'm', 'r'];
		// convert input to number
		const inputToNmuber = (input: string) => {
			switch (input) {
				case 'left':
				case 'l':
					return 0;
				case 'middle':
				case 'm':
					return 1;
				case 'right':
				case 'r':
					return 2;
			}
		};
		// assign where the football and goal keeper should be
		const Detective: number = Math.floor(Math.random() * Game[1].length);
		Game[1][Detective] = '🕵️‍♂️';
		const Football: number = Math.floor(Math.random() * Game[2].length);
		Game[3][Football] = '⚽';
		// handle imput
		const msg: Message = await message.channel.send(
			`${Game.map((value: string[]) => value.join('')).join('\n')}`,
			client.embed(
				{
					description: `*You're in a football match, about to score... But where do you go? **left** (l), **right** (r) or **middle** (m).*`,
				},
				message
			)
		);
		const messageCollector: MessageCollector = message.channel.createMessageCollector(
			(m: Message) => m.author.id == message.author.id,
			{ time: 5000, max: 1 }
		);
		messageCollector.on('collect', async (msg: Message) => {
			// get input values
			const Input: string = msg.content.toLowerCase();
			const inputPosition: number = inputToNmuber(Input);
			// if it is not left, middle or right return
			if (!validInputs.includes(Input.toLowerCase()))
				messageCollector.stop('invalid_input');
			// if it is valid, check if the goal keeper is there
			// if the goal keeper is where the ball is going
			if (Game[1][inputPosition] == '🕵️‍♂️')
				messageCollector.stop('goal_keeper_saved');
			// they aren't there so they win
			if (Game[1][inputPosition] != '🕵️‍♂️') messageCollector.stop('scored');
			// delete the message
			return await msg.delete({ timeout: 1000 });
		});
		// decreased rate if they fail
		const decreasedRate: number = Math.floor(Math.random() * 100);
		// rate if they score
		const rate: number = Math.floor(Math.random() * 100);
		messageCollector.on(
			'end',
			async (collected: Collection<string, Message>, reason: string) => {
				switch (reason) {
					case 'invalid_input':
						// send a angry message
						await msg.edit('');
						await msg.edit(
							client.embed(
								{
									description: `The fans hate you. How could you not type \`left\`, \`right\` or \`middle\`? The captain gives you $${decreasedRate} for that.`,
								},
								message
							)
						);
						// destroy array
						Game.length = 0;
						await giveMoney(message.author.id, decreasedRate);
						// delete original message
						return await message.delete();
					case 'goal_keeper_saved':
						// send a angry message
						await msg.edit('');
						await msg.edit(
							client.embed(
								{
									description: `The fans hate you. How could you not the see the goal keeper? He was standing still! The captain gives you $${decreasedRate} for that.`,
								},
								message
							)
						);
						// destroy array
						Game.length = 0;
						// delete original message
						await message.delete();
						await giveMoney(message.author.id, decreasedRate);
						// delete original message
						try {
							return await message.delete();
						} catch {}
					case 'time':
						// dont give them anything
						await msg.edit('');
						await msg.edit(
							client.embed(
								{
									description: `The fans hate you. You got tackled! You get nothing for that.\n\n*You don't get anything because you didn't say anything.*`,
								},
								message
							)
						);
						// destroy array
						Game.length = 0;
						// delete original message
						try {
							return await message.delete();
						} catch {}
					case 'scored':
						// send a nice message
						await msg.edit('');
						await msg.edit(
							client.embed(
								{
									description: `The fans love you! You win the match! The captain gives you $${rate} because of it!`,
								},
								message
							)
						);
						// destroy array
						Game.length = 0;
						await giveMoney(message.author.id, rate);
						// delete original message
						try {
							return await message.delete({ timeout: 3000 });
						} catch {}
				}
			}
		);
	} else {
		const rate: number = Math.floor(Math.random() * 100);
		await message.channel.send(
			client.embed(
				{ description: `You work as a **${Job}** and get **$${rate}**!` },
				message
			)
		);
		return await giveMoney(message.author.id, rate);
	}
};
export const category: string = 'economy';
export const cooldown: number = 30000; // 30 seconds

export const description: string = 'A cool command';

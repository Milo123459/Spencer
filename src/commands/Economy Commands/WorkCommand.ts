import { RunFunction } from '../../interfaces/Command';
import {
	Message,
	MessageCollector,
	Collection,
	MessageActionRow,
	MessageButton,
	Interaction,
	ButtonInteraction,
	MessageComponent,
	MessageActionRowComponentResolvable,
} from 'discord.js';

export const name: string = 'work';
export const run: RunFunction = async (client, interaction) => {
	const EconomySchema = await client.db.load('usereconomy');
	const User = await EconomySchema.findOne({ User: interaction.user.id });
	if (!(User as any)?.Job)
		return client.utils.fail(
			interaction,
			{
				description:
					"Wait a minute, you don't have a job! Use /setjob to get a job!",
			},
			'work'
		);
	// get job
	const Job: string = (User as any).Job;
	// function to add money to user
	const giveMoney = async (User: string, Coins: number) => {
		return EconomySchema.increment({ User }, 'Coins', Coins);
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
					return 0;
				case 'middle':
					return 1;
				case 'right':
					return 2;
			}
		};
		// assign where the football and goal keeper should be
		const Detective: number = Math.floor(Math.random() * Game[1].length);
		Game[1][Detective] = '🕵️‍♂️';
		const Football: number = Math.floor(Math.random() * Game[2].length);
		Game[3][Football] = '⚽';
		// handle imput
		const response = await interaction.reply({
			fetchReply: true,
			content: `${Game.map((value: string[]) => value.join('')).join('\n')}`,
			embeds: [
				client.embed(
					{
						description: `*You're in a football match, about to score... But where do you go? **left** (l), **right** (r) or **middle** (m).*`,
					},
					interaction
				),
			],
			components: [
				new MessageActionRow().addComponents([
					new MessageButton({
						label: 'Left',
						style: 'PRIMARY',
						customId: 'left',
					}),
					new MessageButton({
						label: 'Middle',
						style: 'PRIMARY',
						customId: 'middle',
					}),
					new MessageButton({
						label: 'Right',
						style: 'PRIMARY',
						customId: 'right',
					}),
				]),
			],
		});
		const buttonCollector = (
			response as Message
		).createMessageComponentCollector({
			filter: (inter) => inter.user.id === interaction.user.id,
			time: 10000,
			max: 1,
		});
		buttonCollector.on('collect', async (interaction: ButtonInteraction) => {
			// get input values
			const inputPosition: number = inputToNmuber(interaction.customId);
			// if it is not left, middle or right return
			if (!validInputs.includes(interaction.customId.toLowerCase()))
				buttonCollector.stop('invalid_input');
			// if it is valid, check if the goal keeper is there
			// if the goal keeper is where the ball is going
			if (Game[1][inputPosition] == '🕵️‍♂️')
				buttonCollector.stop('goal_keeper_saved');
			// they aren't there so they win
			if (Game[1][inputPosition] != '🕵️‍♂️') buttonCollector.stop('scored');
		});
		// decreased rate if they fail
		const decreasedRate: number = Math.floor(Math.random() * 50);
		// rate if they score
		const rate: number = Math.floor(Math.random() * 100);
		buttonCollector.on(
			'end',
			async (_collected: Collection<string, Message>, reason: string) => {
				switch (reason) {
					case 'invalid_input':
						// send a angry message
						await interaction.editReply({
							embeds: [
								client.embed(
									{
										description: `The fans hate you. How could you not click the button? The manager gives you $${decreasedRate} for that.`,
									},
									interaction
								),
							],
							components: [],
						});
						// destroy array
						Game.length = 0;
						await giveMoney(interaction.user.id, decreasedRate);
					case 'goal_keeper_saved':
						// send a angry message
						await interaction.editReply({
							embeds: [
								client.embed(
									{
										description: `The fans hate you. How could you not see the goal keeper? He was standing still! The manager gives you $${decreasedRate} for that.`,
									},
									interaction
								),
							],
							components: [],
						});
						// destroy array
						Game.length = 0;
						// delete original message
						await giveMoney(interaction.user.id, decreasedRate);
					// delete original message
					case 'time':
						// dont give them any
						await interaction.editReply({
							embeds: [
								client.embed(
									{
										description: `The fans hate you. You got tackled! You get nothing for that.`,
									},
									interaction
								),
							],
							components: [],
						});
						// destroy array
						Game.length = 0;
					case 'scored':
						// send a nice message
						await interaction.editReply({
							embeds: [
								client.embed(
									{
										description: `The fans love you! You win the match! The manager gives you $${rate} because of it!`,
									},
									interaction
								),
							],
							components: [],
						});
						// destroy array
						Game.length = 0;
						await giveMoney(interaction.user.id, rate);
					// delete original message
				}
			}
		);
	} else {
		const rate: number = Math.floor(Math.random() * 100);
		await interaction.reply({
			embeds: [
				client.embed(
					{ description: `You work as a **${Job}** and get **$${rate}**!` },
					interaction
				),
			],
		});
		return giveMoney(interaction.user.id, rate);
	}
};
export const category: string = 'economy';
export const cooldown: number = 30000; // 30 seconds
export const description: string = 'Work for money';
export const options: import('discord.js').ApplicationCommandOption[] = [];

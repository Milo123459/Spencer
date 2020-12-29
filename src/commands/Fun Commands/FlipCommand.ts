import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	const choices: string[] = ['Heads', 'Tails'];
	const chosenChoice = choices[Math.floor(Math.random() * choices.length)];

	message.channel.send(
		client.embed(
			{
				title: 'Flip!',
				description: `The coin landed on ${chosenChoice}!`,
			},
			message
		)
	);
};

export const name: string = 'flip';
export const category: string = 'fun';
export const description: string = 'Flip a coin!';
export const aliases: string[] = ['flipcoin', 'coinflip'];

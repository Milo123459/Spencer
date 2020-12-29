import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	const randomRoll = Math.floor(Math.random() * 6) + 1;
	message.channel.send(
		client.embed(
			{
				title: '🎲 Roll! 🎲',
				description: `The dice rolled a ${randomRoll}!`,
			},
			message
		)
	);
};

export const name: string = 'roll';
export const category: string = 'fun';
export const description: string = 'Roll a dice!';
export const aliases: string[] = ['rolldice', 'rolldie'];

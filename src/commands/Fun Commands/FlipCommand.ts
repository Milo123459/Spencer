import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	const chosenChoice: string = client.utils.randomElement(['Heads', 'Tails']);

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

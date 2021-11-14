import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	const chosenChoice: string = client.utils.randomElement(['Heads', 'Tails']);

	interaction.reply({
		embeds: [
			client.embed(
				{
					title: 'Flip!',
					description: `The coin landed on ${chosenChoice}!`,
				},
				interaction
			),
		],
	});
};

export const name: string = 'flip';
export const category: string = 'fun';
export const description: string = 'Flip a coin!';
export const aliases: string[] = ['flipcoin', 'coinflip'];
export const options: import("discord.js").ApplicationCommandOption[] = []
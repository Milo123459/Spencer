import { RunFunction } from '../../interfaces/Command';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, interaction) => {
	fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res: { joke: string }) => {
			interaction.reply({
				embeds: [
					client.embed(
						{ title: 'Dad Joke', description: res.joke },
						interaction
					),
				],
			});
		});
};
export const name: string = 'dadjoke';
export const category: string = 'fun';
export const description: string = 'Get a horrid dad joke';
export const options: import('discord.js').ApplicationCommandOption[] = [];

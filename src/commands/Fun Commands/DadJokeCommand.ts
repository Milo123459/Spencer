import { RunFunction } from '../../interfaces/Command';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message) => {
	fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res: { joke: string }) => {
			message.channel.send(
				client.embed({ title: 'Dad Joke', description: res.joke }, message)
			);
		});
};
export const name: string = 'dadjoke';
export const category: string = 'fun';
export const description: string = 'Get a horrid dad joke';

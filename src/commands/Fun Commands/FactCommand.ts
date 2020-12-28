import { RunFunction } from '../../interfaces/Command';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message) => {
	let response: any = await fetch('https://no-api-key.com/api/v1/facts').then(
		(res) => {
			res.json();
		}
	);

	await message.channel.send(
		client.embed({ title: 'Random Fact!', description: response.fact }, message)
	);
};

export const name: string = 'fact';
export const category: string = 'fun';
export const cooldown: number = 3000;
export const description: string = 'Get a random fact! Fetched from an API';

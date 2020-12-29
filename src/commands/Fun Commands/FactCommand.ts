import { RunFunction } from '../../interfaces/Command';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message) => {
	const response: { fact: string } = await fetch(
		'https://no-api-key.com/api/v1/facts'
	).then((res) => res.json());
	return message.channel.send(
		client.embed({ description: response.fact }, message)
	);
};

export const name: string = 'fact';
export const category: string = 'fun';
export const description: string = "Get a random fact you didn't need to know.";

import { RunFunction } from '../../interfaces/Command';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message, args) => {
	const response: { question: string; answer: string } = await fetch(
		'https://no-api-key.com/api/v1/riddle'
	).then((res) => res.json());

	return message.channel.send(
		client
			.embed({ title: 'Riddle!' }, message)
			.addField(response.question, `||${response.answer}||`)
	);
};

export const name: string = 'riddle';
export const category: string = 'fun';
export const description: string = 'Fetch a random fact and answer from an API.';

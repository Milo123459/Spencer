import { RunFunction } from '../../interfaces/Command';
import { SRAImage } from '../../interfaces/SRAImage';
import fetch from 'node-fetch';
export const run: RunFunction = async (client, message) => {
	const response = (await fetch(
		'https://some-random-api.ml/img/red_panda'
	).then((res) => res.json())) as SRAImage;
	return message.channel.send(
		client.embed({ image: { url: response.link } }, message)
	);
};
export const name: string = 'redpanda';
export const category: string = 'fun';
export const description: string = 'Get a random red panda!';
export const cooldown: number = 5000;

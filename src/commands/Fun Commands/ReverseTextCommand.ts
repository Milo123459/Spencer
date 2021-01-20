import { RunFunction } from '../../interfaces/Command';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message, args) => {
	const response = await fetch(
		`https://no-api-key.com/api/v1/flip-text?text=${args[0]}`
	).then((res) => res.json());

	if (!response) {
		return message.channel.send(
			client.embed(
				{
					description:
						'Hm, looks like something is down. Join our support server, or try rerunning the command.',
				},
				message
			)
		);
	}

	if (!args.length) {
		return message.channel.send(
			client.embed(
				{ description: 'You did not provide text to reverse!' },
				message
			)
		);
	}

	return message.channel.send(
		client.embed(
			{
				fields: [
					{ name: 'Inputted Text', value: args[0] },
					{ name: 'Reversed Text', value: response.message },
				],
			},
			message
		)
	);
};

export const name: string = 'reversetext';
export const description: string = 'Reverse any text query!';
export const category: string = 'fun';
export const aliases: string[] = ['textreverse'];

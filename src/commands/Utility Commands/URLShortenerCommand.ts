import { RunFunction } from '../../interfaces/Command';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message, args) => {
	function shorten(url: string) {
		fetch('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url));
	}

	if (!args.length) {
		return message.channel.send(
			client.embed(
				{ description: 'You did not pass in the URL you want to shorten!' },
				message
			)
		);
	}

	if (!args[0].startsWith('https://') || !args[0].startsWith('http://')) {
		return message.channel.send(
			client.embed({ description: 'You can only shorten URLs!' }, message)
		);
	}

	message.delete();

	return message.channel.send(
		client.embed(
			{
				fields: [
					{ name: 'Long URL', value: args[0] },
					{ name: 'Shortened URL', value: shorten(args[0]) },
				],
			},
			message
		)
	);
};

export const name: string = 'urlshorten';
export const category: string = 'utility';
export const description: string = 'Shorten a long URL into a tinyurl';
export const cooldown: number = 6000;
export const aliases: string[] = ['shortenurl', 'urlshortener'];

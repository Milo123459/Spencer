import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	const decode = async (char: string) => {
		return char
			.split(' ')
			.map((str) => {
				String.fromCharCode(Number.parseInt(str, 2));
			})
			.join('');
	};

	if (!args.length) {
		return message.channel.send(
			client.embed(
				{ description: 'You did not provide any binary to decode to text!' },
				message
			)
		);
	}

	if (args.length > 50) {
		return message.channel.send(
			client.embed(
				{ description: 'Sorry, but that is too many characters!' },
				message
			)
		);
	}

	return message.channel.send(
		client.embed(
			{
				title: 'Result',
				fields: [
					{ name: `Inputted Binary`, value: args[0] },
					{ name: 'Decoded Text', value: decode(args[0]) },
				],
			},
			message
		)
	);
};

export const name: string = 'decode';
export const description: string = 'Decode binary to text';
export const category: string = 'fun';
export const aliases: string[] = ['decodebinary'];

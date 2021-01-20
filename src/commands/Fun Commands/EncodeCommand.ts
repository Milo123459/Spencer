import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	const encode = async (char: string) => {
		return char
			.split('')
			.map((str) => {
				const converted = str.charCodeAt(0).toString(2);
				return converted.padStart(8, '0');
			})
			.join('');
	};

	if (!args.length) {
		return message.channel.send(
			client.embed(
				{ description: 'You did not provide any text to encode to binary!' },
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
					{ name: `Inputted Text`, value: args[0] },
					{ name: 'Encoded Binary', value: encode(args[0]) },
				],
			},
			message
		)
	);
};

export const name: string = 'encode';
export const description: string = 'Encode any text to binary!';
export const category: string = 'fun';
export const aliases: string[] = ['encodetext'];

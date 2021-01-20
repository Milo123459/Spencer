import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length) {
		return message.channel.send(
			client.embed(
				{ description: 'You did not provide any text for me to spoilerify!' },
				message
			)
		);
	}

	return message.channel.send(`||${args[0]}||`);
};

export const name: string = 'spoilerify';
export const description: string = 'Spoilerify any text!';
export const category: string = 'fun';
export const aliases: string[] = ['spoiler'];

import { RunFunction } from '../../interfaces/Command';
import { evaluate } from 'mathjs';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return await message.channel.send(
			client.embed({ description: 'Please provide an equasion!' }, message)
		);
	try {
		const sum = evaluate(args.join(' '));
		await message.channel.send(
			client.embed(
				{ description: `You\'re equasion results:\n\`\`\`\n${sum}\`\`\`` },
				message
			)
		);
	} catch {
		return await message.channel.send(
			client.embed(
				{ description: "I'm no genius, but that didn't make sense!" },
				message
			)
		);
	}
};

export const aliases: string[] = ['maths', 'calculate'];
export const usage: string = '<equasion>';
export const name: string = 'math';
export const category: string = 'utility';
export const description: string = 'A cool command';

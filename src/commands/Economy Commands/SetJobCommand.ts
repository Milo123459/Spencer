import { Message } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

interface Option {
	reaction: string;
	name: string;
	description: string;
}

export const run: RunFunction = async (client, message) => {
	const EconomyShcmea = await client.db.load('usereconomy');
	const options: Array<Option> = [
		{
			reaction: '⚽',
			name: 'Footballer',
			description: `Work as a footabller. Fun right?`,
		},
		{
			reaction: '💻',
			name: 'Programmer',
			description: 'Work as a epic gamer chad programmer guy!!!',
		},
		{
			reaction: '🎥',
			name: 'Movie director',
			description: "You make movies, just, don't look at the reviews.",
		},
	];

	const msg: Message = await message.channel.send(
		client.embed(
			{
				description: `Please pick a job by reacting below.\n${options
					.map(
						(value: Option) =>
							`${value.reaction} - ${value.name}: ${value.description}`
					)
					.join('\n')}`,
			},
			message
		)
	);
	try {
		const reaction: string = await client.utils.awaitReactions(
			message.author.id,
			msg,
			options.map((opt: Option) => opt.reaction)
		);
		await EconomyShcmea.update(
			{ User: message.author.id },
			{ Job: options.find((value: Option) => value.reaction == reaction).name }
		);
		await msg.edit(
			client.embed(
				{
					description: `Woohoo! You\'re now a ${
						options.find((value: Option) => value.reaction == reaction).name
					}`,
				},
				message
			)
		);
		await msg.reactions.removeAll();
	} catch (e) {
		await msg.edit(
			client.embed({ description: `Nice one, you didn\'t respond.` }, message)
		);
	}
};
export const name: string = 'setjob';
export const category: string = 'economy';
export const description: string = 'A cool command';

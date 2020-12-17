import { Message } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
import { Job } from '../../interfaces/Job';
import { Jobs } from '../../static/Jobs';

export const run: RunFunction = async (client, message) => {
	const EconomyShcmea = await client.db.load('usereconomy');
	const msg: Message = await message.channel.send(
		client.embed(
			{
				description: `Please pick a job by reacting below.\n${Jobs.map(
					(value: Job) =>
						`${value.reaction} **${value.name}**: ${value.description}`
				).join('\n')}`,
			},
			message
		)
	);
	try {
		const reaction: string = await client.utils.awaitReactions(
			message.author.id,
			msg,
			Jobs.map((opt: Job) => opt.reaction)
		);
		await EconomyShcmea.update(
			{ User: message.author.id },
			{ Job: Jobs.find((value: Job) => value.reaction == reaction).name }
		);
		await msg.edit(
			client.embed(
				{
					description: `Woohoo! You\'re now a${
						Jobs.find((value: Job) => value.reaction == reaction)?.n ? 'n' : ''
					} **${Jobs.find(
						(value: Job) => value.reaction == reaction
					).name.toLowerCase()}**`,
				},
				message
			)
		);
		return await msg.reactions.removeAll();
	} catch (e) {
		await msg.edit(
			client.embed({ description: `Nice one, you didn\'t respond.` }, message)
		);
		return await msg.reactions.removeAll();
	}
};
export const name: string = 'setjob';
export const category: string = 'economy';

import { Message } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	const embed: Message = await message.channel.send(
		client.embed(
			{
				description:
					'Awaiting input...\nThis prompt lasts 5 minutes. If you wish to cancel type `cancel`, and to publish it type `done`. You can add a max of 10 options.',
			},
			message
		)
	);
	const step: Message = await message.channel.send(
		'Current step: `Please enter a question for the poll`'
	);
	let count: number = 0;
	const incrementStep = async (): Promise<void> =>
		void (await step.edit(
			`Current step: \`Please specify options for the poll. ${count++}/10\``
		));
	let title: string;
	const questions: string[] = [];
	const collector = message.channel.createMessageCollector(
		(msg: Message) => msg.author.id == message.author.id,
		{ time: 1000 * 60 * 3 }
	);
	collector.on('collect', async (m: Message) => {
		try {
			await m.delete();
		} catch {}
		if (['cancel', 'done'].includes(m.content.toLowerCase())) {
			if (m.content.toLowerCase() == 'cancel') {
				return collector.stop('cancel');
			}
		}
		if (!title) title = m.content;
	});
	collector.on('end', async (collected, reason) => {
		if (reason == 'cancel') {
			try {
				await message.delete();
			} catch {}
			try {
				await step.delete();
			} catch {}
			try {
				await embed.delete();
			} catch {}
		}
	});
};
export const name: string = 'poll';
export const category: string = 'utility';
export const description: string = 'Create an advanced poll';
export const userPermissions: string = 'MANAGE_MESSAGES';
export const cooldown: number = 10000;

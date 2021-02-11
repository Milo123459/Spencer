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
	const collector = message.channel.createMessageCollector(
		(msg: Message) => msg.author.id == message.author.id,
		{ time: 1000 * 60 * 3 }
	);
};
export const name: string = 'poll';
export const category: string = 'utility';
export const description: string = 'Create an advanced poll';
export const userPermissions: string = 'MANAGE_MESSAGES';

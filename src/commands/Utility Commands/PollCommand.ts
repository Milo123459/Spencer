import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!message.member.hasPermission('MANAGE_CHANNELS')) {
		return message.channel.send(
			client.embed(
				{
					description:
						"I'm sorry, but you need to have the MANAGE_CHANNELS permission to be able to create a poll.",
				},
				message
			)
		);
	}

	if (!args.length) {
		return message.channel.send(
			client.embed(
				{ description: 'You did not specify the poll content!' },
				message
			)
		);
	}

	return message.channel
		.send(
			client.embed({ title: '📝 New Poll! 📝', description: args[0] }, message)
		)
		.then((embed) => {
			embed.react('👍');
			embed.react('👎');

			message.delete();
		});
};

export const name: string = 'poll';
export const description: string = 'Create a poll for users to vote on';
export const category: string = 'utility';
export const aliases: string[] = ['createpoll'];

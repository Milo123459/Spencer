import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!client.utils.checkVC(message)) {
		return message.channel.send(
			client.embed(
				{
					description:
						'You have to be in a voice channel and be in the same voice channel as me!',
				},
				message
			)
		);
	}
};
export const name: string = 'skip';
export const category: string = 'music';
export const description: string = 'A cool command';

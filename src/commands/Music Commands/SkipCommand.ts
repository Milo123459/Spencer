import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
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
	const dispatch = client.music.dispatchers.get(message.guild.id);
	if (!dispatch)
		return message.channel.send(
			client.embed({ description: 'I am not playing music!' }, message)
		);
	if (!message.guild.me.voice?.channel)
		return message.channel.send(
			client.embed({ description: 'I need to be in a VC as well!' }, message)
		);
	if (!dispatch.queue.size)
		return message.channel.send(
			client.embed(
				{ description: 'There is nothing else in the queue!' },
				message
			)
		);
	if (
		message.guild.me.voice.channel.members.size == 2 &&
		message.guild.me.voice.channel.members.has(message.author.id)
	) {
		await dispatch.player.stopTrack();
		return message.channel.send(
			client.embed({ description: 'Skipped!' }, message)
		);
	} else {
		if (!message.member.permissions.has('MANAGE_GUILD'))
			return message.channel.send(
				client.embed(
					{
						description:
							'You need MANAGE_GUILD to skip as there are other people in the VC.',
					},
					message
				)
			);
		await dispatch.player.stopTrack();
		return message.channel.send(
			client.embed({ description: 'Skipped!' }, message)
		);
	}
};
export const name: string = 'skip';
export const category: string = 'music';
export const description: string = 'A cool command';

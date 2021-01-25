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
	if (
		message.guild.me.voice.channel.members.size == 2 &&
		message.guild.me.voice.channel.members.has(message.author.id)
	) {
		if (dispatch.player.paused == true)
			return message.channel.send(
				client.embed({ description: 'The song is already paused!' }, message)
			);
		await dispatch.player.setPaused(true);
		return message.channel.send(
			client.embed({ description: 'Paused!' }, message)
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
		if (dispatch.player.paused == true)
			return message.channel.send(
				client.embed({ description: 'The song is already paused!' }, message)
			);
		await dispatch.player.setPaused(true);
		return message.channel.send(
			client.embed({ description: 'Paused!' }, message)
		);
	}
};
export const name: string = 'pause';
export const category: string = 'music';
export const description: string = 'Pause the current song';

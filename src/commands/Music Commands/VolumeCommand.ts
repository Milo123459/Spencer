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
	const dispatch = client.music.dispatchers.get(message.guild.id);
	if (!dispatch)
		return message.channel.send(
			client.embed({ description: 'I am not playing music!' }, message)
		);
	if (!message.guild.me.voice?.channel)
		return message.channel.send(
			client.embed({ description: 'I need to be in a VC as well!' }, message)
		);
	if (!args.length)
		return message.channel.send(
			client.embed(
				{
					description: `I'm currently playing at music level \`${dispatch.player.volume}\``,
				},
				message
			)
		);
	if (
		isNaN(parseInt(args[0])) ||
		parseInt(args[0]) > 100 ||
		parseInt(args[0]) < 0
	)
		return message.channel.send(
			client.embed({ description: 'Provide a valid volume! 0-100!' }, message)
		);
	if (
		message.guild.me.voice.channel.members.size == 2 &&
		message.guild.me.voice.channel.members.has(message.author.id)
	) {
		await dispatch.player.setVolume(parseInt(args[0]));
		return message.channel.send(
			client.embed({ description: 'Updated the volume!' }, message)
		);
	} else {
		if (!message.member.permissions.has('MANAGE_GUILD'))
			return message.channel.send(
				client.embed(
					{
						description:
							'You need MANAGE_GUILD to set the volume as there are other people in the VC.',
					},
					message
				)
			);
		await dispatch.player.setVolume(parseInt(args[0]));
		return message.channel.send(
			client.embed({ description: 'Updated the volume!' }, message)
		);
	}
};
export const name: string = 'volume';
export const category: string = 'music';
export const description: string = 'Get / change the volume';
export const usage: string = '[new volume]';

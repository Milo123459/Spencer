import { RunFunction } from '../../interfaces/Command';
import yocto from 'yocto-queue';
import { Message } from 'discord.js';
import { limitArrayify } from 'tyvn';
import { ShoukakuTrack } from 'shoukaku';

interface Queue extends ShoukakuTrack {
	message: Message;
}

export const run: RunFunction = async (client, message) => {
	const dispatch = client.music.dispatchers.get(message.guild.id);
	if (!dispatch || !dispatch.current)
		return message.channel.send(
			client.embed({ description: "This guild isn't playing music!" }, message)
		);
	const currentSong = dispatch.current;
	return message.channel.send(
		client.embed(
			{
				description: `Currently playing: **[${currentSong.info.title}](${
					currentSong.info.uri
				})** by **${currentSong.info.author}**
                    Queue\n${limitArrayify<yocto<Queue>, Queue>(
											dispatch.queue,
											10
										)[0]
											.map(
												(value: Queue, index: number) =>
													`${index + 1}: **[${value.info.title}](${
														value.info.uri
													})**`
											)
											.join('\n')}
                    ${
											dispatch.queue.size > 10
												? `... and ${dispatch.queue.size - 10} more songs..`
												: ''
										}
                    `.trim(),
			},
			message
		)
	);
};
export const name: string = 'queue';
export const category: string = 'music';
export const description: string = 'See what is in the queue';

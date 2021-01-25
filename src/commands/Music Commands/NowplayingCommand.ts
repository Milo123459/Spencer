import { RunFunction } from '../../interfaces/Command';
import progress from 'string-progressbar';

export const run: RunFunction = async (client, message) => {
	const dispatch = client.music.dispatchers.get(message.guild.id);
	if (!dispatch || !dispatch.current)
		return message.channel.send(
			client.embed({ description: "This guild isn't playing music!" }, message)
		);
	const currentSong = dispatch.current;
	return message.channel.send(
		client
			.embed(
				{
					description: `**${currentSong.info.title}** by **${
						currentSong.info.author
					}** | Requested by: ${currentSong.message.author}\n${
						progress(currentSong.info.length, dispatch.player.position, 20)[0]
					}`,
				},
				message
			)
			.setThumbnail(
				`https://img.youtube.com/vi/${currentSong.info.identifier}/0.jpg`
			)
	);
};
export const name: string = 'nowplaying';
export const category: string = 'music';
export const description: string = 'A cool command.';

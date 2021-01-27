import { Activity } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
export const run: RunFunction = async (client, message, args) => {
	const user = client.utils.ResolveMember(message, args[0]) || message.member;
	const spotify = user.presence.activities.find(
		(value: Activity) => value.name.toLowerCase() == 'spotify'
	);
	if (!spotify)
		return message.channel.send(
			client.embed(
				{ description: `${user.user.tag} isn't listening to Spotify.` },
				message
			)
		);
	return message.channel.send(
		client.embed(
			{
				title: spotify.details,
				description: `by **${spotify.state}** on **${
					spotify.assets?.largeText ??
					"apparently unknown? Discord didn't display the data correctly"
				}**`,
				thumbnail: {
					url: `https://i.scdn.co/image/${spotify.assets.largeImage?.slice(8)}`,
				},
			},
			message
		)
	);
};
export const name: string = 'spotify';
export const category: string = 'info';
export const description: string =
	'Get the song that someone is listening to on Spotify.';

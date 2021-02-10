import { RunFunction } from '../../interfaces/Command';
import { Util } from 'discord.js';
import * as ImageAPI from 'imageapi.js';

export const run: RunFunction = async (client, message) => {
	const subreddit = client.utils.randomElement(['meme', 'memes', 'dankmemes']);
	const meme = await ImageAPI.advanced(subreddit);
	await message.channel.send(
		client.embed(
			{
				title: meme.title,
				description: `👍 ${meme.upvotes} 👎 ${meme.downvotes} (${
					meme.upvoteRatio
				}% people enjoyed this meme) | u/**${Util.escapeMarkdown(
					meme.author
				)}** in r/**${subreddit}**`,
				image: {
					url: meme.img,
				},
			},
			message
		)
	);
};
export const name: string = 'meme';
export const category: string = 'fun';
export const cooldown: number = 3000;
export const description: string = 'Get a funny meme';

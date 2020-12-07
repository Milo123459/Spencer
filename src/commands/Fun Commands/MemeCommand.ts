import { RunFunction } from '../../interfaces/Command';
import { Util } from 'discord.js';
import * as ImageAPI from 'imageapi.js';

export const run: RunFunction = async (client, message) => {
	const memeSubreddits = ['meme', 'memes', 'dankmemes']
	const meme = await ImageAPI.advanced(memeSubreddits[Math.floor(Math.random()* memeSubreddits.length)]);
	await message.channel.send(
		client
			.embed(
				{
					title: meme.title,
					description: `👍 ${meme.upvotes} 👎 ${meme.downvotes} (${
						meme.upvoteRatio
					}% people enjoyed this meme) | u/**${Util.escapeMarkdown(
						meme.author
					)}** in r/**meme**`,
				},
				message
			)
			.setImage(meme.img)
	);
};
export const name: string = 'meme';
export const category: string = 'fun';
export const cooldown: number = 3000;

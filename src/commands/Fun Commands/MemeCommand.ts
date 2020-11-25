import { RunFunction } from '../../interfaces/Command';
import * as ImageAPI from 'imageapi.js';

export const run: RunFunction = async (client, message) => {
	const meme = await ImageAPI.advanced('meme');
	await message.channel.send(
		client
			.embed(
				{
					title: meme.title,
					description: `Upvotes: 👍 ${meme.upvotes} | u/**${meme.author}** in r/**meme**`,
				},
				message
			)
			.setImage(meme.img)
	);
};
export const name: string = 'meme';
export const category: string = 'fun';
export const cooldown: number = 3000;

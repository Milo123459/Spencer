import { RunFunction } from '../../interfaces/Command';
import { Util } from 'discord.js';
import * as ImageAPI from 'imageapi.js';

export const run: RunFunction = async (client, interaction) => {
	const meme = await ImageAPI.advanced('stonks');
	await interaction.reply({
		embeds: [
			client.embed(
				{
					title: meme.title,
					description: `👍 ${meme.upvotes} 👎 ${meme.downvotes} (${
						meme.upvoteRatio
					}% people enjoyed this meme) | u/**${Util.escapeMarkdown(
						meme.author
					)}** in r/**stonks**`,
					image: {
						url: meme.img,
					},
				},
				interaction
			),
		],
	});
};
export const name: string = 'stonks';
export const category: string = 'fun';
export const cooldown: number = 3000;
export const description: string = 'Get a stonk';
export const options: import('discord.js').ApplicationCommandOption[] = [];

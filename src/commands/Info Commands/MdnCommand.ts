import { MessageEmbed } from 'discord.js';
import nodeFetch from 'node-fetch';
import { RunFunction } from '../../interfaces/Command';
import paginationEmbed from '../../utils/Pagination';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{ title: 'Invalid usage, provide a search term! `mdn <search input>`' },
				message
			)
		);

	const pages: MessageEmbed[] = [];

	nodeFetch(
		`https://developer.mozilla.org/api/v1/search/en-US?q=${args.join(
			' '
		)}&locale=en-US&highlight=false`
	)
		.then((body) => body.json())
		.then(async (result) => {
			result.documents.forEach((document) => {
				if (!document.slug.toLowerCase().includes('javascript')) {
					return;
				}

				pages.push(
					new MessageEmbed()
						.setTitle(document.title)
						.setAuthor(document.slug)
						.setDescription(document.excerpt.replace(/<\/?[^>]+(>|$)/g, ''))
						.setColor('#2F3136')
				);
			});

			if (!pages.length) {
				return message.channel.send(
					client.embed({ title: 'No results!' }, message)
				);
			}

			paginationEmbed(message, pages, ['⏪', '⏩'], 30000);
		});
};

export const name: string = 'mdn';
export const category: string = 'info';
export const usage: string = '<...search input>';
export const description: string = 'Search for something on the MDN JS Docs';

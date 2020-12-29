import { RunFunction } from '../../interfaces/Command';
import paginationEmbed from '../../utils/Pagination';
import { MDNResult, Document } from '../../interfaces/MDNResult';
import { MessageEmbed } from 'discord.js';
import fetch from 'node-fetch';
export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{ title: 'Invalid usage, provide a search term! `mdn <search input>`' },
				message
			)
		);

	const pages: MessageEmbed[] = [];

	const result: MDNResult = await fetch(
		`https://developer.mozilla.org/api/v1/search/en-US?q=${encodeURIComponent(
			args.join(' ')
		)}&locale=en-US&highlight=false`
	).then((body) => body.json());

	result.documents.map((document: Document) => {
		if (!document.slug.toLowerCase().includes('javascript')) return;

		return pages.push(
			client.embed(
				{
					title: document.title,
					description: document.excerpt.replace(/<\/?[^>]+(>|$)/g, ''),
				},
				message
			)
		);
	});

	if (!pages.length) {
		return message.channel.send(
			client.embed({ title: 'No results!' }, message)
		);
	}

	return paginationEmbed(message, pages, ['⏪', '⏩'], 30000);
};

export const name: string = 'mdn';
export const category: string = 'info';
export const usage: string = '<...search input>';
export const description: string = 'Search for something on the MDN JS Docs';

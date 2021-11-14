import { CommandInteraction, MessageEmbed, Message } from 'discord.js';

const paginationEmbed = async (
	msg: CommandInteraction,
	pages: MessageEmbed[],
	emojiList: string[] = ['⏪', '⏩'],
	timeout: number = 120000
): Promise<Message> => {
	if (!msg && !msg.channel) throw new Error('Channel is inaccessible.');
	if (!pages) throw new Error('Pages are not given.');
	if (emojiList.length !== 2) throw new Error('Need two emojis.');

	let page = 0;
	msg.reply({
		embeds: [pages[page].setAuthor(`Page ${page + 1} / ${pages.length}`)],
	});
	const curPage = (await msg.fetchReply()) as Message;
	for (const emoji of emojiList) await curPage.react(emoji);

	const reactionCollector = curPage.createReactionCollector({
		filter: (reaction, user) =>
			emojiList.includes(reaction.emoji.name) && !user.bot,
		time: timeout,
	});

	reactionCollector.on('collect', (reaction) => {
		reaction.users.remove(msg.user);
		switch (reaction.emoji.name) {
			case emojiList[0]:
				page = page > 0 ? --page : pages.length - 1;
				break;
			case emojiList[1]:
				page = page + 1 < pages.length ? ++page : 0;
				break;
			default:
				break;
		}

		curPage.edit({
			embeds: [pages[page].setAuthor(`Page ${page + 1} / ${pages.length}`)],
		});
	});

	reactionCollector.on('end', () => {
		if (!curPage.deleted) {
			curPage.reactions.removeAll();
		}
	});
	return curPage;
};

export default paginationEmbed;

import { Message, MessageEmbed } from 'discord.js';

declare module 'discord.js-pagination' {
	export default function paginationEmbed(
		msg: Message,
		pages: MessageEmbed[],
		emojiList: string[],
		timeout: number
	): Promise<Message>;
}

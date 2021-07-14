import { Message } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';
import { Anything } from '../../interfaces/Anything';
export const run: RunFunction = async (client, message: Message) => {
	if (message.partial) await message.fetch();
	const SuggestionSchema = await client.db.load('suggestion');
	const Suggestion = await SuggestionSchema.findOne({ MessageID: message.id });
	if ((Suggestion as Anything).User) {
		await Suggestion.delete();
	}
};
export const name: string = 'messageDelete';

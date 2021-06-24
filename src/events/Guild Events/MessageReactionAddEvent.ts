import { MessageReaction, User } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';
import { Anything } from '../../interfaces/Anything';
import { emojis } from '../../static/Emojis';
export const run: RunFunction = async (
	client,
	reaction: MessageReaction,
	user: User
) => {
	if (reaction.partial) await reaction.fetch();
	if (reaction.message.partial) await reaction.message.fetch();
	if (user.partial) await user.fetch();
	const SuggestionSchema = await client.db.load('suggestion');
	if (
		reaction.emoji.toString() != emojis.spencerup &&
		reaction.emoji.toString() != emojis.spencerdown
	)
		return;
	const messageID = reaction.message.id;
	const userID = user.id;
	const Suggestion = await SuggestionSchema.findOne({ MessageID: messageID });
	if (!(Suggestion as Anything) || !(Suggestion as Anything).User) return;
	if ((Suggestion as Anything).User == userID) {
		try {
			await reaction.users.remove(userID);
		} catch {}
	} else {
		const up = reaction.message.reactions.cache.get("801826018096054293");
		const down = reaction.message.reactions.cache.get("801826044562767892");
		await up.fetch();
		await up.users.fetch();
		await down.fetch();
		await down.users.fetch();
		const upvote =
			reaction.emoji.toString() == '<:spencerup:801826018096054293>'
				? true
				: false;
		if (upvote) {
			if (down.users.cache.has(userID)) {
				await reaction.users.remove(userID);
			}
		} else {
			if (up.users.cache.has(userID)) {
				await reaction.users.remove(userID);
			}
		}
	}
};
export const name: string = 'messageReactionAdd';

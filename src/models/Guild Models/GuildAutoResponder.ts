import { model, Schema } from 'mongoose';
export const name: string = 'guildautoresponder';
export const data = model(
	'guildautoresponder',
	new Schema({
		Guild: String,
		Trigger: String,
		Content: String,
		Aliases: { default: [], type: Array },
		Wildcard: { default: false, type: Boolean },
	})
);

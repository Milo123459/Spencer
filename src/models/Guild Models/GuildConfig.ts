import { model, Schema } from 'mongoose';
export const name: string = 'guildconfig';
export const data = model(
	'guildconfig',
	new Schema({
		Guild: String,
		Prefix: String,
		WelcomeChannel: String,
		LeaveChannel: String,
		SuggestionChannel: String,
	})
);

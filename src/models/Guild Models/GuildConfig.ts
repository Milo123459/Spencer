import { model, Schema } from 'mongoose';
export const name: string = 'guildconfig';
export const data = model(
	'guildconfig',
	new Schema({
		Guild: String,
		Prefix: String,
		SuggestionChannel: String,
		AutoDeleteActions: Boolean,
		MessageLogsChannel: String,
		ReportChannel: String,
		AntiRaid: String,
		AntiLink: Boolean,
		DidYouMean: Boolean,
	})
);

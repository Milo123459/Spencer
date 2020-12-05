import { model, Schema } from 'mongoose';
export const name: string = 'suggestion';
export const data = model(
	'suggestion',
	new Schema({
		Guild: String,
		User: String,
		Content: String,
		State: String,
		MessageID: String,
	})
);

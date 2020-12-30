import { model, Schema } from 'mongoose';
export const name: string = 'raiduser';
export const data = model(
	'raiduser',
	new Schema({
		User: String,
		Guild: String,
		Actions: Number,
	})
);

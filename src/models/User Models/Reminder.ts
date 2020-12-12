import { model, Schema } from 'mongoose';
export const name: string = 'reminder';
export const data = model(
	'reminder',
	new Schema({
		User: String,
		Message: String,
		Time: Number,
	})
);

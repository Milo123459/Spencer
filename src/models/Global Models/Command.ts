import { model, Schema } from 'mongoose';
export const name: string = 'command';
export const data = model(
	'command',
	new Schema({
		LifeTime: Object,
		Daily: Object,
	})
);

import { model, Schema } from 'mongoose';
export const name: string = 'commands';
export const data = model(
	'command',
	new Schema({
		LifeTime: Object,
		Daily: Object,
	})
);

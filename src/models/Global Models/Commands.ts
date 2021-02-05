import { model, Schema } from 'mongoose';
export const name: string = 'commands';
export const data = model(
	'commands',
	new Schema({
		LifeTime: Object,
		Daily: Object,
	})
);

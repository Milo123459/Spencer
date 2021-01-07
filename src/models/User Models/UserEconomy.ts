import { model, Schema } from 'mongoose';
export const name: string = 'usereconomy';
export const data = model(
	'usereconomy',
	new Schema({
		User: String,
		Coins: Number,
		VoteReminder: Boolean,
		Job: String,
		DepositedCoins: Number,
		Daily: Number,
	})
);

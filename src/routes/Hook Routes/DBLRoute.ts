import { RunFunction, Method } from '../../interfaces/Route';
import { Anything } from '../../interfaces/Anything';
import ms from 'ms';

export const run: RunFunction = async (client, req, res) => {
	const EconomySchema = await client.db.load('usereconomy');
	const ReminderSchema = await client.db.load('reminder');
	await EconomySchema.increment(
		{ User: req.vote.user },
		'Coins',
		req.vote.isWeekend ? 2000 : 1000
	);
	const UserProfile = await EconomySchema.findOne({ User: req.vote.user });
	if ((UserProfile as Anything)?.VoteReminder == true) {
		await ReminderSchema.create({
			User: req.vote.user,
			message:
				'🚀 You can now vote on top.gg again! ⭐ https://top.gg/bot/765156777607823380/vote',
			Time: Date.now() + ms('12h'),
		});
	}
};
export const method: Method = 'post';
export const path: string = '/webhooks/dbl';
export const middlewares: string[] = ['dblWebhook.middleware'];

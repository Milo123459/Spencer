import { RunFunction } from '../../interfaces/Event';
import { Document } from 'mongoose';
import { Anything } from '../../interfaces/Anything';
import { User } from 'discord.js';
import express from 'express';
import * as sdk from '@top-gg/sdk';
import ms from 'ms';

export const name: string = 'ready';
export const run: RunFunction = async (client) => {
	client.logger.success(`${client.user.tag} is now online!`);
	await client.user.setActivity(`${client.prefix}help | 👦 Spencer`, {
		type: 'WATCHING',
	});
	setInterval(async () => {
		const ReminderSchema = await client.db.load('reminder');

		(await ReminderSchema.find({})).map(async (value: Document) => {
			if (Date.now() >= (value as Anything).Time) {
				const User: User = client.users.cache.get((value as Anything).User);
				try {
					await value.delete();
					await User.send(
						`I was told to remind you: ${(value as Anything).Message}`
					);
				} catch {}
			}
		});
	}, 1000 * 60);
	if (client.config.webAuth) {
		const server = express();
		const EconomySchema = await client.db.load('usereconomy');
		server.get('/', (req, res) => res.status(200).json({ msg: '🚀' }));
		server.post(
			'/webhooks/dbl',
			client.topGGWebhook.middleware(),
			async (req, res) => {
				await EconomySchema.increment(
					{ User: req.vote.user },
					'Coins',
					req.vote.isWeekend ? 1000 : 2000
				);
				const Profile = await EconomySchema.findOne({ User: req.vote.user });
				const voteReminder = (Profile as Anything)?.VoteReminder || false;
				if (!!voteReminder) {
					const ReminderSchema = await client.db.load('reminder');
					await ReminderSchema.create({
						User: req.vote.user,
						Time: Date.now() + ms('12h'),
						Message:
							'🚀 Vote reminder, you can now vote on top.gg! ⭐ Here is the link: https://top.gg/bot/765156777607823380/vote',
					});
				}
				return res.json({ msg: 'Success, 🚀' });
			}
		);
		server.listen(client.config.webPort, () =>
			client.logger.success(
				`Webhook server listening on port ${client.config.webPort}`
			)
		);
		client.topGGApi.postStats({
			serverCount: client.guilds.cache.size,
		});
		setInterval(() => {
			client.topGGApi.postStats({
				serverCount: client.guilds.cache.size,
			});
		}, 1800000);
	}
};

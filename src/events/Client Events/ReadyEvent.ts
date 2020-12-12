import { RunFunction } from '../../interfaces/Event';
import { Document } from 'mongoose';
import { Anything } from '../../interfaces/Anything';
import { User } from 'discord.js';
import express from 'express';
import * as sdk from '@top-gg/sdk';

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
		const webhook = new sdk.Webhook(client.config.webAuth);
		const api = new sdk.Api(client.config.topGGToken);
		const EconomySchema = await client.db.load('usereconomy');
		server.get('/', (req, res) => res.status(200).json({ msg: '🚀' }));
		server.post('/webhooks/dbl', webhook.middleware(), async (req, res) => {
			await EconomySchema.increment(
				{ User: req.vote.user },
				'Coins',
				req.vote.isWeekend ? 1000 : 2000
			);
			return res.json({ msg: 'Success, 🚀' });
		});
		server.listen(client.config.webPort, () =>
			client.logger.success(
				`Webhook server listening on port ${client.config.webPort}`
			)
		);
		api.postStats({
			serverCount: client.guilds.cache.size,
		});
		setInterval(() => {
			api.postStats({
				serverCount: client.guilds.cache.size,
			});
		}, 1800000);
	}
};

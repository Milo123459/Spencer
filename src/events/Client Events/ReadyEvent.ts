import { RunFunction } from '../../interfaces/Event';
import { Document } from 'mongoose';
import { Anything } from '../../interfaces/Anything';
import { User, TextChannel, MessageEmbed } from 'discord.js';
import express from 'express';
import nodeCron from 'node-cron';
import sourcebin from 'sourcebin';
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
						`I was told to remind you${
							(value as Anything)?.Guild
								? ' from ' +
								  client.guilds.cache.get((value as Anything)?.Guild).name
								: ''
						}: **${(value as Anything).Message}**`
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
					req.vote.isWeekend ? 2000 : 1000
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
	nodeCron
		.schedule('0 0 * * * ', async () => {
			const schema = await client.db.load('command');
			const data = await schema.findOne({});
			await schema.update({}, { Daily: {} });
			const lifetime = Object.entries((data as Anything)?.LifeTime)
				.sort((a: [string, number], b: [string, number]) => b[1] - a[1])
				.map(
					(value: [string, number]) =>
						`${value[0]} - ${value[1].toLocaleString()}`
				)
				.join('\n');
			const daily = Object.entries((data as Anything)?.Daily)
				.sort((a: [string, number], b: [string, number]) => b[1] - a[1])
				.map(
					(value: [string, number]) =>
						`${value[0]} - ${value[1].toLocaleString()}`
				)
				.join('\n');
			const lifeTimeSourcebin = await sourcebin.create([
				{
					name: 'Life time most ran Commands',
					language: 'text',
					content: lifetime,
				},
			]);
			const dailySourcebin = await sourcebin.create([
				{
					name: 'Daily most ran Commands',
					language: 'text',
					content: daily,
				},
			]);
			const channel = client.channels.cache.get('807186889797926912');
			(channel as TextChannel).send(
				new MessageEmbed({
					description: `
        [Click this to view the last 24 hours](${dailySourcebin.url})
        [Click this to view the life time stats](${lifeTimeSourcebin.url})
        `,
					title: 'Last 24 hours',
				})
			);
		})
		.start();
};

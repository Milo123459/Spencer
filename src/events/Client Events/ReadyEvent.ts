import { RunFunction } from '../../interfaces/Event';
import { Document } from 'mongoose';

import { GuildMember, User } from 'discord.js';
import express from 'express';
import ms from 'ms';

export const name: string = 'ready';
export const run: RunFunction = async (client) => {
	client.logger.success(`${client.user.tag} is now online!`);
	const commands = [...client.commands.values()];
	client.application.commands.set(commands);
	client.user.setActivity(`/help | 👦 Spencer`, {
		type: 'WATCHING',
	});
	if (client.config.onlyUsed) {
		client.guilds.cache
			.get('784470505607528448')
			.roles.cache.get('809733163252187156')
			.members.map((value: GuildMember) => {
				client.config.onlyUsed.push(value.id);
			});
	}
	setInterval(async () => {
        console.log("in setinterval");
		const ReminderSchema = await client.db.load('reminder');
        console.log("after getting schema");
		(await ReminderSchema.find({})).forEach(async (value: Document) => {
            console.log(Date.now() - (value as any).Time, !(Date.now() - (value as any).Time).toString().startsWith('-'), Date.now() - (value as any).Time);
			if (Date.now() >= (value as any).Time) {
                console.log("passed the if");
				const User: User = client.users.cache.get((value as any).User);
				try {
                    console.log("deleting the value");
					await value.delete();
                    console.log("sending message");
					await User.send(
						`I was told to remind you${
							(value as any)?.Guild
								? ' from ' + client.guilds.cache.get((value as any)?.Guild).name
								: ''
						}: **${(value as any).Message}**`
					);
                    console.log("sent message");
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
			client.topGGWebhook.listener(async (vote, req, res) => {
				await EconomySchema.increment(
					{ User: vote.user },
					'Coins',
					vote.isWeekend ? 2000 : 1000
				);
				const Profile = await EconomySchema.findOne({ User: vote.user });
				const voteReminder = (Profile as any)?.VoteReminder || false;
				if (!!voteReminder) {
					const ReminderSchema = await client.db.load('reminder');
					await ReminderSchema.create({
						User: vote.user,
						Time: Date.now() + ms('12h'),
						Message:
							'🚀 Vote reminder, you can now vote on top.gg! ⭐ Here is the link: https://top.gg/bot/765156777607823380/vote',
					});
				}
				res.send('Worked.');
			})
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

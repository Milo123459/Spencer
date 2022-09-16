import { RunFunction } from '../../interfaces/Event';
import { Document } from 'mongoose';

import { User } from 'discord.js';
export const name: string = 'ready';
export const run: RunFunction = async (client) => {
	client.logger.success(`${client.user.tag} is now online!`);
	const commands = [...client.commands.values()];
	client.application.commands.set(commands);
	setInterval(async () => {
		const ReminderSchema = await client.db.load('reminder');
		(await ReminderSchema.find({})).forEach(async (value: Document) => {
			if (Date.now() >= (value as any).Time) {
				let User: User = client.users.cache.get((value as any).User);
				if (!User) {
					User = await client.users.fetch((value as any).User);
				}
				try {
					await User.send(
						`I was told to remind you${
							(value as any)?.Guild
								? ' from ' + client.guilds.cache.get((value as any)?.Guild).name
								: ''
						}: **${(value as any).Message}**`
					);
				} catch {
				} finally {
					await value.delete();
				}
			}
		});
	}, 1000 * 60);
};

import { RunFunction } from '../../interfaces/Command';
import PProgress from 'p-progress';
import { Typed } from 'emittery';
import { GuildMember } from 'discord.js';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return message.channel.send(
			client.embed(
				{ description: `Please specify the characters to dehoist!` },
				message
			)
		);
	const embed = await message.channel.send(
		client.embed({ description: `Fetching members....` }, message)
	);
	const members = await message.guild.members.fetch();
	const GuildEmitter = new Typed<{ member: number }, 'member'>();
	const progressPromise = new PProgress((resolve, reject, progress) => {
		[...members].map((value: [string, GuildMember], index: number) => {
			let newNick: string = '';
			args.map((value: string) => {
				newNick = newNick.replace(new RegExp(value, 'gi'), '').trim();
			});
			GuildEmitter.emit('member', index);
		});
		GuildEmitter.on('member', (eventData: number) => {
			progress(eventData / members.size);
		});
	});
	progressPromise.onProgress(async (progress: number) => {
		await embed.edit(
			client.embed({ description: `${progress * 100}%` }, message)
		);
	});
	await progressPromise;
	await embed.edit(
		client.embed({ description: `Done de-hoisting members!` }, message)
	);
};
export const name: string = 'dehoist';
export const category: string = 'moderation';

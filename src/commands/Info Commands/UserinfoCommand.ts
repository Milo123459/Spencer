import { Role } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
export const name: string = 'userinfo';
export const run: RunFunction = async (client, message, args) => {
	const member = client.utils.ResolveMember(message, args[0]) || message.member;
	await message.channel.send(
		client.embed(
			{
				title: `${member.user.tag} (${member.user.id})`,
				fields: [
					client.utils.constructField(
						`Roles [${
							member.roles.cache.filter(
								(value: Role) => value.name != '@everyone'
							).size
						}]`,
						`${
							member.roles.cache.filter(
								(value: Role) => value.name != '@everyone'
							).size > 20
								? '*Too many roles to show.*'
								: member.roles.cache
										.filter((value) => value.name != '@everyone')
										.map((value: Role) => value.toString())
										.join(', ') || '*No roles.*'
						}`
					),
					client.utils.constructField(
						`Join position`,
						(
							await client.utils.calculateJoinPosition(message, member)
						).toString()
					),
				],
			},
			message
		)
	);
};
export const category: string = 'info';
export const aliases: string[] = ['whois'];
export const usage: string = '[user]';

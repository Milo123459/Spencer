import { Role } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
export const name: string = 'userinfo';
export const run: RunFunction = async (client, message, args) => {
	const member = client.utils.ResolveMember(message, args[0]) || message.member;
	await message.channel.send(
		client.embed(
			{
				title: `${member.user.tag}`,
				fields: [
					client.utils.constructField(
						'Identification',
						`
                        Tag: **${member.user.tag}**
                        ID: **${member.id}**
                        Display name in **${message.guild.name}**: **${member.displayName}**`,
						true
					),
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
						}`,
						true
					),
					client.utils.constructField(
						`Join position`,
						(
							await client.utils.calculateJoinPosition(message, member)
						).toString(),
						true
					),
					client.utils.constructField(
						'Presence',
						`
                        Devices logged in on: **${
													Object.entries(
														member.user.presence?.clientStatus || {}
													).length
												}**${Object.entries(
							member.user.presence?.clientStatus || {}
						)
							.map(
								(value: [string, string], index: number) =>
									`
                                    Device${(Object.entries(
																			member.user.presence.clientStatus
																		).length > 1
																			? ` [${index + 1}]:`
																			: ':'
																		).trim()} **${
										value[0][0].toUpperCase() + value[0].slice(1)
									}**`
							)
							.join('')}
                            Status: **${
															member.user.presence.status.toLowerCase() == 'dnd'
																? 'DND'
																: member.user.presence.status[0].toUpperCase() +
																  member.user.presence.status.slice(1)
														}**
                            `.trim(),
						true
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
export const description: string = 'Get information on a user';

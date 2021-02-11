import { Role, UserFlags } from 'discord.js';
import dayjs from 'dayjs';
import { RunFunction } from '../../interfaces/Command';
import { badges } from '../../static/Badges';
import { arrayIfy } from 'tyvn';
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
                        Discriminator: **${member.user.discriminator}**
                        ID: **${member.id}**
                        Display name in **${message.guild.name}**: **${
							member.displayName
						}**
                        Bot: **${member.user.bot ? 'Yes' : 'No'}**`,
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
						false
					),
					client.utils.constructField(
						`Join position`,
						(
							await client.utils.calculateJoinPosition(message, member)
						).toLocaleString(),
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
                                    Device${
																			Object.entries(
																				member.user.presence.clientStatus
																			).length > 1
																				? ` [${index + 1}]:`
																				: ':'
																		} **${
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
					client.utils.constructField(
						`Badges [${
							arrayIfy<UserFlags, string>(member.user?.flags).filter(
								(value: string) => value != 'EARLY_VERIFIED_DEVELOPER'
							).length ?? 0
						}]`,
						!!arrayIfy<UserFlags, string>(member.user?.flags).length
							? arrayIfy<UserFlags, string>(member.user.flags)
									.filter(
										(value: string) => value != 'EARLY_VERIFIED_DEVELOPER'
									)
									.map(
										(value: string) =>
											`${badges[value.toUpperCase()] ?? '🤷‍♂️'} **${
												value[0].toUpperCase() +
												value.slice(1).toLowerCase().replaceAll('_', ' ')
											}**`
									)
									.join('\n')
							: '*No badges.*',
						true
					),
					client.utils.constructField(
						'Miscellaneous',
						`
                    Boosting **${message.guild.name}**: ${
							member.premiumSince
								? `Since **${dayjs(member.premiumSinceTimestamp).format(
										'DD/MM/YYYY'
								  )}**`
								: '**No**'
						}
                    `,
						true
					),
				],
				description: `Get economy info on ${
					member.id == message.author.id
						? 'yourself'
						: `**${member.displayName}**`
				}: \`${
					member.id == message.author.id
						? `${await client.utils.getPrefix(message.guild.id)}profile`
						: `${await client.utils.getPrefix(message.guild.id)}profile ${
								member.id
						  }
                          All dates are formatted like so: \`DD/MM/YYYY\``
				}\``,
				thumbnail: {
					url: member.user.displayAvatarURL({
						dynamic: true,
						format: 'png',
					}),
				},
			},
			message
		)
	);
};
export const category: string = 'info';
export const aliases: string[] = ['whois'];
export const usage: string = '[user]';
export const description: string = 'Get information on a user';

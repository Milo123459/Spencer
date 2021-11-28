import {
	ApplicationCommandOption,
	Role,
	User,
	UserFlags,
	GuildMember,
} from 'discord.js';
import dayjs from 'dayjs';
import { RunFunction } from '../../interfaces/Command';
import { badges } from '../../static/Badges';
import { arrayIfy } from 'tyvn';
export const name: string = 'userinfo';
export const run: RunFunction = async (client, interaction) => {
	const member = interaction.options.get('user')?.value
		? ((await interaction.guild.members.fetch(
				interaction.options.get('user')?.value as string
		  )) as GuildMember)
		: (interaction.member as GuildMember);
    if (!member) {
        return interaction.reply({ content: "Could not find that user!" });
    }

	return interaction.reply({
		embeds: [
			client.embed(
				{
					title: `${member.user.tag}`,
					fields: [
						client.utils.constructField(
							'Identification',
							`
                        Discriminator: **${member.user.discriminator}**
                        ID: **${member.id}**
                        Display name in **${interaction.guild.name}**: **${
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
								await client.utils.calculateJoinPosition(interaction, member)
							).toLocaleString(),
							true
						),
						client.utils.constructField(
							'Presence',
							`
                        Devices logged in on: **${
													Object.entries(member.presence?.clientStatus || {})
														.length
												}**${Object.entries(member.presence?.clientStatus || {})
								.map(
									(value: [string, string], index: number) =>
										`
                                    Device${
																			Object.entries(
																				member.presence.clientStatus
																			).length > 1
																				? ` [${index + 1}]:`
																				: ':'
																		} **${
											value[0][0].toUpperCase() + value[0].slice(1)
										}**`
								)
								.join('')}
                            Status: **${
															member.presence.status.toLowerCase() == 'dnd'
																? 'DND'
																: member.presence.status[0].toUpperCase() +
																  member.presence.status.slice(1)
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
							'Notable dates',
							`
                    Boosting **${interaction.guild.name}**: ${
								member.premiumSince
									? `Since ${dayjs(member.premiumSinceTimestamp).format(
											'DD/MM/YYYY'
									  )} (${client.utils.formatMS(
											Date.now() - member.premiumSinceTimestamp,
											true
									  )} ago)`
									: 'No'
							}
                    Joined **${interaction.guild.name}**: ${dayjs(
								member.joinedAt
							).format('DD/MM/YYYY')} (${client.utils.formatMS(
								Date.now() - member.joinedTimestamp,
								true
							)} ago)
                    Created account: ${dayjs(member.user.createdAt).format(
											'DD/MM/YYYY'
										)} (${client.utils.formatMS(
								Date.now() - member.user.createdTimestamp,
								true
							)} ago)
                    `,
							true
						),
					],
					description: `Get economy info on ${
						member.id == interaction.user.id
							? 'yourself'
							: `**${member.displayName}**`
					}: \`${
						member.id == interaction.user.id
							? `/profile`
							: `/profile ${member.id}\`
                          All dates are formatted like so: \`DD/MM/YYYY`
					}\``,
					thumbnail: {
						url: member.user.displayAvatarURL({
							dynamic: true,
							format: 'png',
						}),
					},
				},
				interaction
			),
		],
	});
};
export const category: string = 'info';
export const aliases: string[] = ['whois'];
export const usage: string = '[user]';
export const description: string = 'Get information on a user';
export const options: ApplicationCommandOption[] = [
	{
		name: 'user',
		description: 'The user to get the info of',
		type: 'USER',
	},
];

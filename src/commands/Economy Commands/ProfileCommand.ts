import { RunFunction } from '../../interfaces/Command';

import { addProp } from 'tyvn';
import { items } from '../../static/Items';
import { emojis } from '../../static/Emojis';
import { ApplicationCommandOption } from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const EconomySchema = await client.db.load('usereconomy');
	const User: string =
		(interaction.options.get('user')?.value as string) || interaction.user.id;
	const UserCoins = await EconomySchema.findOne({ User });
	const Inventory = (UserCoins as any)?.Inventory || {};
	return interaction.reply({
		embeds: [
			client.embed(
				{
					fields: [
						client.utils.constructField(
							'User',
							`Tag: **${
								(await interaction.guild.members.fetch(User)).user.tag
							}**\nID: **${User}**`,
							true
						),
						client.utils.constructField(
							'Coins',
							`
        Wallet: **${(UserCoins as any)?.Coins || 0}**
        Bank: **${(UserCoins as any)?.DepositedCoins || 0}**
        Total: **${addProp<any>(
					['Coins', 'DepositedCoins'],
					0,
					0,
					UserCoins as any
				)}**`,
							true
						),
						client.utils.constructField(
							'Inventory',
							`
        Unique amount of items: **${Object.entries(Inventory).length}**
        Item they have the most of: **${
					items.find(
						(v) =>
							v.id ==
							Object.entries(Inventory).sort(
								(a, b) => (b[1] as number) - (a[1] as number)
							)[0]?.[0]
					)?.name || 'Nothing.'
				}**
        `,
							true
						),
						client.utils.constructField(
							'Miscellaneous',
							`
                    Voted for Spencer in the last 12 hours: **${
											(await client.utils.tryItAndSee<string>(async () => {
												const hasVoted: boolean =
													await client.topGGApi.hasVoted(User);
												if (hasVoted) return 'Yes';
												else if (!hasVoted) return 'No';
											})) || 'Unknown'
										}**
                    **Ranks**: ${
											!!Object.entries(Inventory).length
												? Object.entries(Inventory)
														.filter((value: [string, number]) =>
															value[0].includes('rank')
														)
														.map(
															(value: [string, number]) =>
																emojis[value[0].split('rank')[0]]
														)
														.join(',') || '*No ranks.*'
												: '*No ranks.*'
										}
                    `
						),
					],
					description: `Get userinfo on this user: \`${
						User == interaction.user.id
							? `${await client.utils.getPrefix(interaction.guild.id)}userinfo`
							: `${await client.utils.getPrefix(
									interaction.guild.id
							  )}userinfo ${User}`
					}\``,
				},
				interaction
			),
		],
	});
};
export const name: string = 'profile';
export const category: string = 'economy';
export const description: string = 'Get info on someone in the economy';
export const options: ApplicationCommandOption[] = [
	{
		name: 'user',
		description: 'The user to get the profile of',
		type: 'USER',
	},
];

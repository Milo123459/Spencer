import { RunFunction } from '../../interfaces/Command';
import { ApplicationCommandOption, User } from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const EconomySchema = await client.db.load('usereconomy');
	const User: string =
		interaction.options.get('user')?.value.toString() || interaction.user.id;
	const UserCoins = await EconomySchema.findOne({ User });
	await interaction.reply({
		embeds: [
			client.embed(
				{
					description: `${
						User == interaction.user.id
							? 'You have'
							: `${interaction.guild.members.cache.get(User).displayName} has`
					} \`$${((UserCoins as any)?.Coins || 0).toLocaleString()}\` in ${
						User == interaction.user.id ? 'your' : 'their'
					} wallet.\n${
						User == interaction.user.id
							? 'You have'
							: `${interaction.guild.members.cache.get(User).displayName} has`
					} \`$${(
						(UserCoins as any)?.DepositedCoins || 0
					).toLocaleString()}\` in ${
						User == interaction.user.id ? 'your' : 'their'
					} bank.\n${
						User == interaction.user.id
							? 'You have'
							: `${interaction.guild.members.cache.get(User).displayName} has`
					} \`$${(
						((UserCoins as any)?.DepositedCoins || 0) +
						((UserCoins as any)?.Coins || 0)
					).toLocaleString()}\` in total.`,
				},
				interaction
			),
		],
	});
};

export const name: string = 'balance';
export const aliases: string[] = [
	'bal',
	'money',
	'cash',
	'howmuchdollar',
	'wallet',
	'bank',
];
export const usage: string = '[user]';
export const category: string = 'economy';
export const description: string = 'Get someones balance';
export const options: ApplicationCommandOption[] = [
	{
		name: 'user',
		description: 'The user to get the balance from',
		type: 'USER',
	},
];

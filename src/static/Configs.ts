import { GuildChannel, Permissions, TextChannel } from 'discord.js';
import { SubCommand } from '../interfaces/ConfigCommand';
import { yn } from '../utils/yn';

export const subcommands: Array<SubCommand> = [
	{
		schema: 'usereconomy',
		key: 'VoteReminder',
		description:
			'Toggles if you want to be DMed when you can next vote on top.gg',
		search: (client, interaction) => new Object({ User: interaction.user.id }),
		validate: (client, interaction, arg) => {
			const value: boolean = yn(arg.value);
			return {
				value,
				fix: `Please provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off'`,
				success: value != undefined,
			};
		},
		parseToDB: (client, interaction, arg) => yn(arg.value),
	},
	{
		schema: 'guildconfig',
		key: 'SuggestionChannel',
		description:
			'Setup the suggestion channel, allowing people to suggest things',
		search: (client, interaction) =>
			new Object({ Guild: interaction.guild.id }),
		validate: (client, interaction, arg) => {
			let value: boolean;
			const channel: GuildChannel | undefined =
				interaction.guild.channels.cache.get(
					arg.value as string
				) as GuildChannel;
			if (!channel) value = undefined;
			else {
				value =
					(interaction.member.permissions as Readonly<Permissions>).has(
						'MANAGE_GUILD'
					) &&
					channel.isText() &&
					channel
						.permissionsFor(interaction.guild.me)
						.has(['SEND_MESSAGES', 'ADD_REACTIONS']);
			}
			return {
				value,
				fix: 'Make sure you have MANAGE_GUILD, the channel exists, it is a text channel & I can SEND_MESSAGES & ADD_REACTIONS',
				success: value != undefined,
			};
		},
		parseToDB: (client, interaction, arg) =>
			interaction.guild.channels.cache.get(
				(arg.value as string).replace('<#', '').replace('>', '')
			).id,
	},
	{
		schema: 'guildconfig',
		key: 'AutoDeleteActions',
		description:
			'Toggles if you want to automatically delete accept,consider,deny',
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, arg) => {
			const value: boolean =
				(message.member.permissions as Readonly<Permissions>).has(
					'MANAGE_GUILD'
				) && yn(arg);
			return {
				value,
				fix: `Please provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off' & make sure you have MANAGE_GUILD`,
				success: value != undefined,
			};
		},
		parseToDB: (client, message, arg) => yn(arg),
	},
	{
		schema: 'guildconfig',
		key: 'ReportChannel',
		description:
			'Set up the channel allowing people to report people in your guild',
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, arg) => {
			let value: boolean;
			const channel = client.channels.cache.get(arg.channel.id);
			if (!channel) value = undefined;
			else {
				value =
					(message.member.permissions as Readonly<Permissions>).has(
						'MANAGE_GUILD'
					) &&
					channel.isText() &&
					(channel as TextChannel)
						.permissionsFor(message.guild.me)
						.has('SEND_MESSAGES');
			}
			return {
				value,
				fix: 'Make sure you have MANAGE_GUILD, the channel exists, it is a text channel & I can SEND_MESSAGES',
				success: value != undefined,
			};
		},
		parseToDB: (client, message, arg) =>
			message.guild.channels.cache.get(arg.channel.id),
	},
	{
		schema: 'guildconfig',
		key: 'AntiRaid',
		description:
			"Setup the anti-raid level. Make sure my role is higher then the user that'd be banned/kicked.",
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, arg) => {
			let value: boolean =
				['low', 'high'].includes(arg.value as string) &&
				(message.member.permissions as unknown as Readonly<Permissions>).has(
					'ADMINISTRATOR'
				) &&
				message.guild.me.permissions.has('BAN_MEMBERS');
			return {
				value,
				fix: 'Make sure you have ADMINISTRATOR, I have BAN_MEMBERS & you specified a valid level. Either low or high\nLow: Gives 3 chances then banned\nHigh: 1 chance then banned\n\nTriggered by: More then 4 mentions in messages',
				success:
					value != undefined &&
					(message.member.permissions as unknown as Readonly<Permissions>).has([
						'ADMINISTRATOR',
						'BAN_MEMBERS',
					]) &&
					message.guild.me.permissions.has('BAN_MEMBERS'),
			};
		},
		parseToDB: (client, message, args) => args[0].toLowerCase(),
	},
	{
		schema: 'guildconfig',
		key: 'AntiLink',
		description: 'Toggles if you want members to be able to send links.',
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, args) => {
			const value: boolean =
				yn(args[0]) &&
				(message.member.permissions as unknown as Readonly<Permissions>).has(
					'MANAGE_GUILD'
				);
			return {
				value,
				fix: `Make sure you have MANAGE_GUILD & provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off'`,
				success:
					value != undefined &&
					(message.member.permissions as unknown as Readonly<Permissions>).has(
						'MANAGE_GUILD'
					),
			};
		},
		parseToDB: (client, message, args) => yn(args[0]),
	},
	{
		schema: 'guildconfig',
		key: 'DidYouMean',
		description: 'Toggles if you want the bot to send "did you mean" messages.',
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, args) => {
			const value: boolean =
				yn(args[0]) &&
				(message.member.permissions as unknown as Readonly<Permissions>).has(
					'MANAGE_GUILD'
				);
			return {
				value,
				fix: `Make sure you have MANAGE_GUILD & provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off'`,
				success:
					value != undefined &&
					(message.member.permissions as unknown as Readonly<Permissions>).has(
						'MANAGE_GUILD'
					),
			};
		},
		parseToDB: (client, interaction) =>
			yn(interaction.options.get('value').value!.toString()),
	},
];

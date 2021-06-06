import { GuildChannel } from 'discord.js';
import { SubCommand } from '../interfaces/ConfigCommand';
import yn from 'yn';

export const subcommands: Array<SubCommand> = [
	{
		schema: 'usereconomy',
		key: 'VoteReminder',
		description:
			'Toggles if you want to be DMed when you can next vote on top.gg',
		search: (client, message) => new Object({ User: message.author.id }),
		validate: (client, message, args) => {
			const value: boolean = yn(args[0]);
			return {
				value,
				fix: `Please provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off'`,
				success: value != undefined,
			};
		},
		parseToDB: (client, message, args) => yn(args[0]),
	},
	{
		schema: 'guildconfig',
		key: 'Prefix',
		description: 'Change the prefix of the bot',
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, args) => {
			const value =
				message.member.permissions.has('MANAGE_GUILD') && args[0].length < 5;
			return {
				value,
				fix: 'Please make sure you have the permission MANAGE_GUILD & the prefix length is less then 5!',
				success: value != false,
			};
		},
		parseToDB: (client, message, args) => args[0],
	},
	{
		schema: 'guildconfig',
		key: 'SuggestionChannel',
		description:
			'Setup the suggestion channel, allowing people to suggest things',
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, args) => {
			let value: boolean;
			const channel: GuildChannel | undefined = client.utils.ResolveChannel(
				message,
				args[0]
			);
			if (!channel) value = undefined;
			else {
				value =
					message.member.permissions.has('MANAGE_GUILD') &&
					channel.isText() &&
					channel
						.permissionsFor(message.guild.me)
						.has(['SEND_MESSAGES', 'ADD_REACTIONS']);
			}
			return {
				value,
				fix: 'Make sure you have MANAGE_GUILD, the channel exists, it is a text channel & I can SEND_MESSAGES & ADD_REACTIONS',
				success: value != undefined,
			};
		},
		parseToDB: (client, message, args) =>
			client.utils.ResolveChannel(message, args[0]).id,
	},
	{
		schema: 'guildconfig',
		key: 'AutoDeleteActions',
		description:
			'Toggles if you want to automatically delete accept,consider,deny',
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, args) => {
			const value: boolean =
				message.member.permissions.has('MANAGE_GUILD') && yn(args[0]);
			return {
				value,
				fix: `Please provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off' & make sure you have MANAGE_GUILD`,
				success: value != undefined,
			};
		},
		parseToDB: (client, message, args) => yn(args[0]),
	},
	{
		schema: 'guildconfig',
		key: 'ReportChannel',
		description:
			'Set up the channel allowing people to report people in your guild',
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, args) => {
			let value: boolean;
			const channel: GuildChannel | undefined = client.utils.ResolveChannel(
				message,
				args[0]
			);
			if (!channel) value = undefined;
			else {
				value =
					message.member.permissions.has('MANAGE_GUILD') &&
					channel.isText() &&
					channel.permissionsFor(message.guild.me).has('SEND_MESSAGES');
			}
			return {
				value,
				fix: 'Make sure you have MANAGE_GUILD, the channel exists, it is a text channel & I can SEND_MESSAGES',
				success: value != undefined,
			};
		},
		parseToDB: (client, message, args) =>
			client.utils.ResolveChannel(message, args[0]).id,
	},
	{
		schema: 'guildconfig',
		key: 'AntiRaid',
		description:
			"Setup the anti-raid level. Make sure my role is higher then the user that'd be banned/kicked.",
		search: (client, message) => new Object({ Guild: message.guild.id }),
		validate: (client, message, args) => {
			let value: boolean =
				args.length &&
				['low', 'high'].includes(args[0].toLowerCase()) &&
				message.member.permissions.has('ADMINISTRATOR') &&
				message.guild.me.permissions.has('BAN_MEMBERS');
			return {
				value,
				fix: 'Make sure you have ADMINISTRATOR, I have BAN_MEMBERS & you specified a valid level. Either low or high\nLow: Gives 3 chances then banned\nHigh: 1 chance then banned\n\nTriggered by: More then 4 mentions in messages',
				success:
					value != undefined &&
					message.member.permissions.has(['ADMINISTRATOR', 'BAN_MEMBERS']) &&
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
				yn(args[0]) && message.member.permissions.has('MANAGE_GUILD');
			return {
				value,
				fix: `Make sure you have MANAGE_GUILD & provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off'`,
				success:
					value != undefined && message.member.permissions.has('MANAGE_GUILD'),
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
				yn(args[0]) && message.member.permissions.has('MANAGE_GUILD');
			return {
				value,
				fix: `Make sure you have MANAGE_GUILD & provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off'`,
				success:
					value != undefined && message.member.permissions.has('MANAGE_GUILD'),
			};
		},
		parseToDB: (client, message, args) => yn(args[0]),
	},
];

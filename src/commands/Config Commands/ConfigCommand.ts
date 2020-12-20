import { RunFunction } from '../../interfaces/Command';
import { Message, GuildChannel } from 'discord.js';
import yn from 'yn';
interface ValidationResponse {
	value: boolean;
	fix: string;
	success: boolean;
}

interface SubCommand {
	schema: string;
	search: object;
	key: string;
	validate: (message: Message, args: string[]) => ValidationResponse;
	parseToDB: (message: Message, args: string[]) => any;
}

export const run: RunFunction = async (client, message, args) => {
	const subcommands: Array<SubCommand> = [
		{
			schema: 'usereconomy',
			key: 'VoteReminder',
			search: { User: message.author.id },
			validate: (message: Message, args: string[]) => {
				const value: boolean = yn(args[0]);
				return {
					value,
					fix: `Please provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off'`,
					success: value != undefined,
				};
			},
			parseToDB: (message: Message, args: string[]) => yn(args[0]),
		},
		{
			schema: 'guildconfig',
			key: 'Prefix',
			search: { Guild: message.guild.id },
			validate: (message: Message, args: string[]) => {
				const value =
					message.member.permissions.has('MANAGE_GUILD') && args[0].length < 5;
				return {
					value,
					fix:
						'Please make sure you have the permission MANAGE_GUILD & the prefix length is less then 5!',
					success: value,
				};
			},
			parseToDB: (message: Message, args: string[]) => args[0],
		},
		{
			schema: 'guildconfig',
			key: 'SuggestionChannel',
			search: { Guild: message.guild.id },
			validate: (message: Message, args: string[]) => {
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
					fix:
						'Make sure you have MANAGE_GUILD, the channel exists, it is a text channel & I can SEND_MESSAGES & ADD_REACTIONS',
					success: !!value,
				};
			},
			parseToDB: (message: Message, args: string[]) =>
				client.utils.ResolveChannel(message, args[0]).id,
		},
		{
			schema: 'guildconfig',
			key: 'AutoDeleteActions',
			search: { Guild: message.guild.id },
			validate: (message: Message, args: string[]) => {
				const value: boolean =
					message.member.permissions.has('MANAGE_GUILD') && yn(args[0]);
				return {
					value,
					fix: `Please provide a yes/no style value, valid values: 'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0, 'on', 'off' & make sure you have MANAGE_GUILD`,
					success: value != undefined,
				};
			},
			parseToDB: (message: Message, args: string[]) => yn(args[0]),
		},
	];
	if (!args[0])
		return await message.channel.send(
			client.embed(
				{
					description: `
    All available configs:
    ${subcommands
			.map(
				(value: SubCommand) => `${value.key.toLowerCase()} - ${value.schema}`
			)
			.join('\n')}

    You can do sp!config <config-name> <value> like so, some require extra permissions.
    `,
				},
				message
			)
		);
	const subcommand: SubCommand = subcommands.find(
		(value: SubCommand) => value.key.toLowerCase() == args[0].toLowerCase()
	);
	if (!subcommand)
		return await message.channel.send(
			client.embed({ description: "That config can't be found!" }, message)
		);
	if (!args.slice(1).length)
		return await message.channel.send(
			client.embed(
				{ description: 'Please specify a value to put into the config!' },
				message
			)
		);
	const validated = subcommand.validate(message, args.slice(1));
	if (!!!validated.success)
		return await message.channel.send(
			client.embed({ description: validated.fix }, message)
		);
	await (await client.db.load(subcommand.schema)).update(
		subcommand.search,
		client.utils.proper(
			subcommand.key,
			subcommand.parseToDB(message, args.slice(1))
		)
	);
	return await message.channel.send(
		client.embed(
			{
				description: `Successfully set ${
					subcommand.key
				} to ${subcommand.parseToDB(message, args.slice(1))}!`,
			},
			message
		)
	);
};
export const name: string = 'config';
export const category: string = 'config';

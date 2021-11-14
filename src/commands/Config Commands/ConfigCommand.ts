import { RunFunction } from '../../interfaces/Command';
import { ApplicationCommandOption, Permissions } from 'discord.js';
import { SubCommand } from '../../interfaces/ConfigCommand';
import { subcommands } from '../../static/Configs';
export const run: RunFunction = async (client, interaction) => {
	const subcommand: SubCommand = subcommands.find(
		(value: SubCommand) =>
			value.key.toLowerCase() == interaction.options.get('key').value
	);
	if (!subcommand) return interaction.reply('No subcommand provided.');
	if (!interaction.options.get('value').value!.toString().length)
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							'Please specify a value to put into the config! (or delete to stop it from running)',
					},
					interaction
				),
			],
		});
	if (
		interaction.options.get('value').value!.toString().toLowerCase() == 'delete'
	) {
		if (
			subcommand.schema == 'guildconfig' &&
			!(interaction.member.permissions as Permissions).has(
				Permissions.FLAGS.ADMINISTRATOR
			)
		)
			return interaction.reply({
				embeds: [
					client.embed({ description: 'Come back with admin...' }, interaction),
				],
			});
		await (
			await client.db.load(subcommand.schema)
		).update(
			subcommand.search(client, interaction),
			client.utils.proper(subcommand.key, undefined)
		);
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: `Deleted ${subcommand.key}!` },
					interaction
				),
			],
		});
	}
	const validated = subcommand.validate(
		client,
		interaction,
		interaction.options.get('key', true)
	);
	if (!!!validated.success)
		return interaction.reply({
			embeds: [client.embed({ description: validated.fix }, interaction)],
		});
	await (
		await client.db.load(subcommand.schema)
	).update(
		subcommand.search(client, interaction),
		client.utils.proper(
			subcommand.key,
			subcommand.parseToDB(
				client,
				interaction,
				interaction.options.get('value', true)
			)
		)
	);
	return interaction.reply({
		embeds: [
			client.embed(
				{
					description: `Successfully set ${
						subcommand.key
					} to ${subcommand.parseToDB(
						client,
						interaction,
						interaction.options.get('value', true)
					)}!`,
				},
				interaction
			),
		],
	});
};
export const name: string = 'config';
export const category: string = 'config';
export const description: string = 'Configure the bot how you like it';
export const usage: string = '<key> <config_value | delete>';
export const options: ApplicationCommandOption[] = [
	{
		name: 'key',
		description: 'The key',
		type: 'STRING',
		required: true,
	},
	{
		name: 'value',
		description: 'The value',
		type: 'STRING',
		required: true,
	},
];

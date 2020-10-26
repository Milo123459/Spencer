import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
export const name: string = 'prefix';
export const run: RunFunction = async (client, message, args) => {
	const GuildConfigSchema = await client.db.load(`guildconfig`);
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
	const Prefix = (GuildConfig as Anything)?.Prefix || client.prefix;
	if (!args[0])
		return message.channel.send(
			client.embed(
				{
					description: `The prefix for **${message.guild.name}** is \`${Prefix}\``,
				},
				message
			)
		);
	await GuildConfigSchema.update(
		{ Guild: message.guild.id },
		{ Prefix: args[0] }
	);
	return message.channel.send(
		client.embed(
			{
				description: `Set the prefix for **${message.guild.name}** to \`${args[0]}\``,
			},
			message
		)
	);
};
export const category: string = 'config';
export const userPermissions: string = 'MANAGE_GUILD';

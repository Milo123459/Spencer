import { Message } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';
interface Anything {
	[key: string]: any;
}
export const name: string = 'message';
export const run: RunFunction = async (client, message: Message) => {
	if (message.author.bot || !message.guild) return;
	const GuildConfigSchema = await client.db.load(`guildconfig`);
	const GuildConfig = await GuildConfigSchema.findOne({ Guild: message.guild.id });
	const Prefix = (GuildConfig as Anything)?.Prefix || client.prefix;
	if (!message.content.toLowerCase().startsWith(Prefix)) return;
	const [cmd, ...args]: string[] = message.content
		.slice(Prefix.length)
		.trim()
		.split(/ +/g);
	const command: Anything =
		client.commands.get(cmd.toLowerCase()) ||
		client.commands.get(client.aliases.get(cmd.toLowerCase()));
	if (command) {
		if (command.userPermissions) {
			if (!message.member.permissions.has(command.userPermissions))
				return message.channel.send(
					client.embed(
						{
							description: `You need to have ${
								typeof command.userPermissions == 'string' ||
								command.userPermissions.length == 1
									? `\`${
											typeof command.userPermissions == 'string'
												? command.userPermissions
												: command.userPermissions[0]
									  }\``
									: `all of these permissions: ${command.userPermissions
											.map((value: string) => `\`${value}\``)
											.join(', ')}`
							}`,
							title: `❌ You can't use that!`,
						},
						message,
					),
				);
		}
		if (
			command.ownerOnly &&
			command.ownerOnly == true &&
			!client.owners.includes(message.author.id)
		)
			return;
		return command.run(client, message, args).catch((e: Error) => {
			client.logger.error(e);
			message.channel.send(
				client.embed(
					{
						title: `❌ An error came about..`,
						description: `\`\`\`\n${e.message}\`\`\``,
					},
					message,
				),
			);
			return client.users.cache.get('450212014912962560').send(
				client.embed(
					{
						title: `❌ An error came about..`,
						description: `\`\`\`\n${e.stack}\`\`\`\n\`\`\`\n${e.message}\`\`\``,
					},
					message,
				),
			);
		});
	}
};

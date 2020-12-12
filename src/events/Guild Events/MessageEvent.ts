import { Message } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';
import { Anything } from '../../interfaces/Anything';
export const name: string = 'message';
export const run: RunFunction = async (client, message: Message) => {
	if (message.author.bot || !message.guild) return;
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: message.guild.id,
	});
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
														.replace(/_/gi, ' ')
														.split(/ +/g)
														.map(
															(value: string) =>
																value[0].toUpperCase() +
																value.slice(1).toLowerCase()
														)
														.join(' ')
												: command.userPermissions[0]
														.replace(/_/gi, ' ')
														.split(/ +/g)
														.map(
															(value: string) =>
																value[0].toUpperCase() +
																value.slice(1).toLowerCase()
														)
														.join(' ')
									  }\``
									: `all of these permissions: ${command.userPermissions
											.map(
												(value: string) =>
													`\`${value
														.toLowerCase()
														.replace(/_/gi, ' ')
														.split(/ +/g)
														.map(
															(value: string) =>
																value[0].toUpperCase() +
																value.slice(1).toLowerCase()
														)
														.join(' ')}\``
											)
											.join(', ')}`
							}`,
							title: `❌ You can't use that!`,
						},
						message
					)
				);
		}
		if (
			command.ownerOnly &&
			command.ownerOnly == true &&
			!client.owners.includes(message.author.id)
		)
			return;
		if (client.cooldowns.has(`${message.author.id}${command.name}`)) {
			const cooldownTime: string = client.utils.formatMS(
				client.cooldowns.get(`${message.author.id}${command.name}`) - Date.now()
			);
			return message.channel.send(
				client.embed(
					{
						description: `You can use this command again in \`${
							cooldownTime.split('').length == 0 ? '1 second' : cooldownTime
						}\``,
					},
					message
				)
			);
		}
		command.run(client, message, args).catch((e: Error) => {
			client.logger.error(e);
			message.channel.send(
				client.embed(
					{
						title: `❌ An error came about..`,
						description: `\`\`\`\n${e.message}\`\`\``,
					},
					message
				)
			);
			if (e.message.toLowerCase().includes('missing permissions')) return;
			return client.users.cache.get('450212014912962560').send(
				client.embed(
					{
						title: `❌ An error came about..`,
						description: `\`\`\`\n${e.stack}\`\`\`\n\`\`\`\n${e.message}\`\`\``,
					},
					message
				)
			);
		});
		if (command?.cooldown) {
			client.cooldowns.set(
				`${message.author.id}${command.name}`,
				Date.now() + command?.cooldown
			);
			setTimeout(() => {
				client.cooldowns.delete(`${message.author.id}${command.name}`);
			}, command?.cooldown);
		}
	}
};

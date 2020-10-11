import { Message } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';
interface Anything {
	[key: string]: any;
}
export const name: string = 'message';
export const run: RunFunction = async (client, message: Message) => {
	if (
		message.author.bot ||
		!message.guild ||
		!message.content.toLowerCase().startsWith(client.prefix)
	)
		return;
	const [cmd, ...args]: string[] = message.content
		.slice(client.prefix.length)
		.trim()
		.split(/ +/g);
	const command: Anything =
		client.commands.get(cmd.toLowerCase()) ||
		client.commands.get(client.aliases.get(cmd.toLowerCase()));
	if (command)
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
			return client.users.cache
				.get('450212014912962560')
				.send(
					client.embed(
						{
							title: `❌ An error came about..`,
							description: `\`\`\`\n${e.stack}\`\`\`\n\`\`\`\n${e.message}\`\`\``,
						},
						message,
					),
				);
		});
};

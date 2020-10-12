import { Command, RunFunction } from '../../interfaces/Command';
import ms from 'ms';
export const name: string = 'help';
export const run: RunFunction = async (client, message, args) => {
	const fields = [...client.categories].map((category: string) => {
		return {
			name: category[0].toUpperCase() + category.slice(1),
			value: client.commands.map((cmd: Command) => `\`${cmd.name}\``).join(', '),
		};
	});
	const commandEmbed = client.embed({ fields }, message);
	if (!args[0]) return message.channel.send(commandEmbed);
	if (
		args[0] &&
		!client.commands.has(args[0].toLowerCase()) &&
		!client.commands.has(client.aliases.get(args[0].toLowerCase()))
	)
		return message.channel.send(commandEmbed);
	const command =
		client.commands.get(args[0].toLowerCase()) ||
		client.commands.get(client.aliases.get(args[0].toLowerCase()));
	message.channel.send(
		client.embed(
			{
				description: Object.entries(command)
					.filter((data) => typeof data[1] != 'function')
					.map(
						(data) =>
							`**${data[0][0].toUpperCase() + data[0].slice(1)}**: ${
								data[1].map
									? data[1].map((d: unknown) => `\`${d}\``).join(', ')
									: typeof data[1] == 'number'
									? `\`${ms(data[1], { long: true })}\``
									: `\`${data[1]}\``
							}`,
					)
					.join('\n'),
			},
			message,
		),
	);
};
export const category: string = 'info';
export const aliases: string[] = ['h', 'commands'];

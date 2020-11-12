import { MessageEmbed } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
export const name: string = 'stats';
export const run: RunFunction = async (client, message) => {
	const embed: MessageEmbed = client.embed(
		{
			description: `Stats for Spencer!\n*Spencer is open source, you can view the code [here](https://github.com/Milo123459/Spencer) - Contributions are welcome!*\nGuilds: \`${client.guilds.cache.size.toLocaleString()}\`\nUsers: \`${client.users.cache.size.toLocaleString()}\`\nChannels: \`${client.channels.cache.size.toLocaleString()}\`\nUptime: \`${client.utils.formatMS(
				client.uptime
			)}\``,
		},
		message
	);
	return await message.channel.send(embed);
};
export const category: string = 'info';

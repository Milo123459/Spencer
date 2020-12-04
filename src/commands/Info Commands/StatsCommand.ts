import { MessageEmbed } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
export const name: string = 'stats';
export const run: RunFunction = async (client, message) => {
	const embed: MessageEmbed = client.embed(
		{
			description: `
			Stats for Spencer!
			*Spencer is open source, you can view the code [here](https://github.com/Milo123459/Spencer) - Contributions are welcome!*
			Guilds: \`${client.guilds.cache.size.toLocaleString()}\`
			Users: \`${client.users.cache.size.toLocaleString()}\`
			Channels: \`${client.channels.cache.size.toLocaleString()}\`
			Uptime: \`${client.utils.formatMS(client.uptime)}\`
			Discord API version: \`${client.options.http?.version || 'Unkown'}\`
			Running OS: \`${client.options.ws?.properties?.$os || 'Unkown'}\`
			WebSocket Ping: \`${client.ws.ping}\``,
		},
		message
	);
	return await message.channel.send(embed);
};
export const category: string = 'info';

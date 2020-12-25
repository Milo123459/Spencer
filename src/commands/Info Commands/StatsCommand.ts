import { MessageEmbed } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
export const name: string = 'stats';
export const run: RunFunction = async (client, message) => {
	const embed: MessageEmbed = client.embed(
		{
			description: `
			Stats for Spencer!
			Guilds: \`${client.guilds.cache.size.toLocaleString()}\`
			Users: \`${client.users.cache.size.toLocaleString()}\`
			Channels: \`${client.channels.cache.size.toLocaleString()}\`
			Uptime: \`${client.utils.formatMS(client.uptime)}\`
			Discord API version: \`${client.options.http?.version || 'Unknown'}\`
			Running OS: \`${process.platform || 'Unknown'}\`
			WebSocket Ping: \`${client.ws.ping}\``,
		},
		message
	);
	return message.channel.send(embed);
};
export const category: string = 'info';
export const description: string = "View the bot's stats";

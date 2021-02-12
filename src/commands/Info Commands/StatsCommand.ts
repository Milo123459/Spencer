import { MessageEmbed } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
import * as pkg from '../../../package.json';
import osName from 'os-name';
import os from 'os';
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
			Running OS: \`${osName(os.platform(), os.release())}\`
            WebSocket Ping: \`${client.ws.ping}\`
            Bot Version: \`${pkg.version}\``,
		},
		message
	);
	return message.channel.send(embed);
};
export const category: string = 'info';
export const description: string = "View the bot's stats";

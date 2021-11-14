import { MessageEmbed } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
import * as pkg from '../../../package.json';
import os from 'os';
export const name: string = 'stats';
export const run: RunFunction = async (client, interaction) => {
	const embed = {
		embeds: [
			client.embed(
				{
					description: `
			Stats for Spencer!
			Guilds: \`${client.guilds.cache.size.toLocaleString()}\`
			Users: \`${client.users.cache.size.toLocaleString()}\`
			Channels: \`${client.channels.cache.size.toLocaleString()}\`
			Uptime: \`${client.utils.formatMS(client.uptime)}\`
			Discord API version: \`${client.options.http?.version || 'Unknown'}\`
            WebSocket Ping: \`${client.ws.ping}\`
            Bot Version: \`${pkg.version}\``,
				},
				interaction
			),
		],
	};
	return interaction.reply(embed);
};
export const category: string = 'info';
export const description: string = "View the bot's stats";
export const options: import("discord.js").ApplicationCommandOption[] = []
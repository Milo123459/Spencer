import { Message } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	await interaction.reply('Ponging..');
	const msg = (await interaction.fetchReply()) as Message;
	const ws: number = client.ws.ping;
	const edit: number = msg.createdTimestamp - interaction.createdTimestamp;
	await interaction.editReply(
		`WebSocket ping: \`${ws}\`MS, Discord API Ping: \`${edit}\`MS`
	);
};
export const name: string = 'ping';
export const category: string = 'info';
export const description: string = 'Get the ping of the bot';
export const options: import('discord.js').ApplicationCommandOption[] = [];

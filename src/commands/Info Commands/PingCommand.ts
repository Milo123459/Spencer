import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	const msg = await message.channel.send('Ponging..');
	const ws: number = client.ws.ping;
	const edit: number = msg.createdTimestamp - message.createdTimestamp;
	await msg.edit(`WebSocket ping: \`${ws}\`MS, API Ping: \`${edit}\`MS`);
};
export const name: string = 'ping';
export const category: string = 'info';
export const description: string = 'Get the ping of the bot';

import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	const msg = await message.channel.send(
		client.embed({ description: 'Ponging..' }, message)
	);
	const ws: number = client.ws.ping;
	const edit: number = msg.createdTimestamp - message.createdTimestamp;
	const pingStatus = client.utils.pingStatus(ws, edit);
	await msg.edit(
		client.embed(
			{
				description: `WebSocket ping: \`${ws}\`MS, API Ping: \`${edit}\`MS\n\nStatus:\nWS: ${
					pingStatus.ws ? 'Average' : 'Not average'
				}\nEdit: ${pingStatus.edit ? 'Average' : 'Not average'}`,
			},
			message
		)
	);
};
export const name: string = 'ping';
export const category: string = 'info';
export const description: string = 'Get the ping of the bot';

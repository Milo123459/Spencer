import { RunFunction } from '../../interfaces/Command';
export const name: string = 'ping';
export const run: RunFunction = async (client, message, args) => {
	const msg = await message.channel.send(
		client.embed({ description: 'Ponging..' }, message),
	);
	await msg.edit(
		client.embed(
			{
				description: `WebSocket ping: \`${client.ws.ping}\`MS, API Ping: \`${
					msg.createdTimestamp - message.createdTimestamp
				}\`MS`,
			},
			message,
		),
	);
};
export const category: string = 'info';

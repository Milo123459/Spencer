import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	return await message.channel.send(
		client.embed(
			{
				description: `
    You can invite the bot [here](https://discord.com/api/oauth2/authorize?client_id=765156777607823380&permissions=8&scope=bot) 
    You can join the support server [here](https://discord.gg/22TtDpJcNE)`.trim(),
			},
			message
		)
	);
};
export const aliases: string[] = ['invite', 'supportserver'];
export const name: string = 'links';
export const category: string = 'info';

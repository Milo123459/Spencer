import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	return await message.channel.send(
		client.embed(
			{
				description: `
    You can invite the bot [here](https://discord.com/api/oauth2/authorize?client_id=765156777607823380&permissions=8&scope=bot) 
	You can join the support server [here](https://discord.gg/22TtDpJcNE)
	You can vote for ${client.user.username} on top.gg [here](https://top.gg/bot/${client.user.id}/vote), on weekdays you get 1000 coins, on weekends you get 2000!`.trim(),
			},
			message
		)
	);
};
export const aliases: string[] = ['invite', 'supportserver', 'vote', 'topgg'];
export const name: string = 'links';
export const category: string = 'info';

import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	return message.channel.send(
		client.embed(
			{
				description: `**${message.guild.name}** has got **${message.guild.memberCount}** members!`,
			},
			message
		)
	);
};
export const aliases: string[] = ['membercount'];
export const name: string = 'members';
export const category: string = 'info';
export const description: string = 'Display how many members you have';

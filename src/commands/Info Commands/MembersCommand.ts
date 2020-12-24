import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	return await message.channel.send(
		client.embed(
			{
				description: `**${message.guild.name}** has got **${message.guild.memberCount}** members! (Well, cached members!)`,
			},
			message
		)
	);
};
export const aliases: string[] = ['membercount'];
export const name: string = 'members';
export const category: string = 'info';
export const description: string = 'Display how many members you have';

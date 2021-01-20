import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!message.member.hasPermission('CHANGE_NICKNAME')) {
		return message.channel.send(
			client.embed(
				{
					description:
						"I'm sorry, but you do not have the permission to change nicknames! ",
				},
				message
			)
		);
	}

	const mentionedMember =
		message.mentions.members.first() ||
		message.guild.members.cache.get(args[0]);

	if (!mentionedMember) {
		return message.channel.send(
			client.embed(
				{
					description: 'You did not provide tag, or provide an ID of the user!',
				},
				message
			)
		);
	}

	mentionedMember.setNickname(args[0]);
};

export const name: string = 'nickname';
export const category: string = 'utility';
export const description: string =
	"Change a user's nickname, please use this command wisely.";
export const aliases: string[] = ['setnickname', 'changenickname', 'nickname'];

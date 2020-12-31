import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	const serverConfig = {
		guildIcon: message.guild.iconURL(),
		guildName: message.guild.name,
		createdAt: message.guild.createdAt,
		guildID: message.guild.id,

		owner: message.guild.owner.user.tag,
		region: message.guild.region,
		verified: message.guild.verified,
		members: message.guild.memberCount,
	};

	return message.channel.send(
		client.embed(
			{
				title: 'Server Information',
				fields: [
					{
						name: 'Server Name',
						value: serverConfig.guildName,
						inline: true,
					},
					{
						name: 'Server ID',
						value: serverConfig.guildID,
						inline: true,
					},
					{
						name: 'Owner',
						value: serverConfig.owner,
						inline: true,
					},
					{
						name: 'Member Count',
						value: serverConfig.members,
						inline: true,
					},
					{
						name: 'Region',
						value: serverConfig.region,
						inline: true,
					},
					{
						name: 'Verification Status',
						value: serverConfig.verified,
						inline: true,
					},
					{
						name: 'Created At',
						value: serverConfig.createdAt,
						inline: true,
					},
				],
			},
			message
		)
	);
};

export const name: string = 'serverinfo';
export const category: string = 'info';
export const description: string = 'Get information about the guild';

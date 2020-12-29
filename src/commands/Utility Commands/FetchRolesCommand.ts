import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	const allGuildRoles = message.guild.roles.cache
		.sort((a, b) => b.position - a.position)
		.map((role) => role)
		.join(',');

	if (allGuildRoles.length > 80) {
		return client.embed({ description: 'Too many roles to display!' }, message);
	}

	if (!allGuildRoles) {
		return client.embed({ description: 'This guild has no roles!' }, message);
	}

	return message.channel.send(
		client.embed(
			{
				title: `${message.guild.name}'s Roles!`,
				fields: [{ name: 'Role List', value: allGuildRoles }],
			},
			message
		)
	);
};

export const name: string = 'deleterole';
export const category: string = 'utility';
export const description: string = 'Fetches all roles from the current guild';
export const aliases: string[] = ['getroles', 'guildroles', 'getroles'];

import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!message.member.hasPermission('ADMINISTRATOR')) {
		return message.channel.send(
			client.embed(
				{
					description: 'You do not have the ADMINISTRATOR permission!',
				},
				message
			)
		);
	}

	if (!args.length) {
		return message.channel.send(
			client.embed(
				{ description: 'You did not provide the role you want to delete!' },
				message
			)
		);
	}

	const roleDeletion = message.guild.roles.cache.find(
		(role) => role.name == args[1]
	);

	roleDeletion.delete().then(() => {
		message.channel
			.send(
				client.embed(
					{
						title: 'Role Deleted!',
						description: `The role ${roleDeletion} was successfully deleted!`,
					},
					message
				)
			)
			.then((m) => m.delete({ timeout: 3000 }));
	});
};

export const name: string = 'deleterole';
export const category: string = 'utility';
export const description: string = 'Create a role!';

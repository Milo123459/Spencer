import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	if (!message.member.permissions.has('ADMINISTRATOR')) {
		return message.channel.send(
			client.embed(
				{ description: 'You do not have the ADMINISTRATOR permission!' },
				message
			)
		);
	}

	if (!args.length) {
		return message.channel.send(
			client.embed(
				{
					description:
						'You did not provide the role name and hex code for the role you want to create!',
				},
				message
			)
		);
	}

	let roleName: any = message.content
		.split(`${client.prefix}createrole`)
		.join('');

	let roleColor;

	if (!roleName) {
		return message.channel.send(
			client.embed({ description: 'No role name was provided! ' }, message)
		);
	}

	if (!roleColor) {
		return message.channel.send(
			client.embed({ description: 'No role color was provided!' }, message)
		);
	}

	if (roleColor <= 0) {
		return message.channel.send(
			client.embed(
				{ description: 'You cannot set a negative hex color!' },
				message
			)
		);
	}

	await message.guild.roles.create({
		data: {
			name: roleName,
			color: roleColor,
		},
	});

	return message.channel
		.send(
			client.embed(
				{
					title: `New Role Created`,
					description: `A new role was created with the name of **${roleName}**, and the color of **${roleColor}**!`,
				},
				message
			)
		)
		.then((m) => m.delete({ timeout: 3000 }));
};

export const name: string = 'createrole';
export const category: string = 'utility';
export const description: string = 'Create a role!';

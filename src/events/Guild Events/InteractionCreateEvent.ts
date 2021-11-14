import { CommandInteraction, Permissions } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';

export const run: RunFunction = async (
	client,
	interaction: CommandInteraction
) => {
	if (!interaction.isCommand()) return;
	if (!interaction.guild) return;
	const command = client.commands.get(interaction.commandName);
	try {
		if (command.userPermissions) {
			if (
				!(interaction.member.permissions as Permissions).has(
					command.userPermissions
				)
			) {
				return interaction.reply({
					embeds: [
						client.embed(
							{
								description: `You don't have the required permissions to run this command. Please contact someone with the correct permissions (usually a server manager) and get them to run this command.`,
								title: `❌ You can't use that!`,
							},
							interaction
						),
					],
				});
			}
		}
		if (client.cooldowns.has(`${interaction.user.id}${command.name}`)) {
			const cooldownTime: string = client.utils.formatMS(
				client.cooldowns.get(`${interaction.user.id}${command.name}`) -
					Date.now()
			);
			return interaction.reply({
				embeds: [
					client.embed(
						{
							description: `You can use this command again in \`${
								cooldownTime.split('').length == 0 ? '1 second' : cooldownTime
							}\`\nDid you know, people who donate to Spencer have their cooldown time halfed! Exciting times! *Please note: For donation perks to work, you have to join Spencer support!*`,
						},
						interaction
					),
				],
			});
		}
		client.cooldowns.set(
			`${interaction.user.id}${command.name}`,
			client.utils.checkMultipleRoles(
				'784470505607528448',
				interaction.user.id,
				['787656384808353803', '787656420258086922', '787656471679991829']
			)
				? Date.now() + command?.cooldown / 2
				: Date.now() + command?.cooldown
		);

		await command.run(client, interaction);
		setTimeout(
			() => {
				client.cooldowns.delete(`${interaction.user.id}${command.name}`);
			},
			client.utils.checkMultipleRoles(
				'784470505607528448',
				interaction.user.id,
				['787656384808353803', '787656420258086922', '787656471679991829']
			)
				? command?.cooldown / 2
				: command?.cooldown
		);
	} catch {
		console.log(`[ERROR] Failed to run command ${interaction.commandName}`);
	}
};

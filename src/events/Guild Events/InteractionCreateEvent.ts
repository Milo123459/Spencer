import { CommandInteraction, Permissions } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';

export const run: RunFunction = async (
	client,
	interaction: CommandInteraction
) => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	try {
		await command.run(client, interaction);
	} catch (e) {
		console.log(
			`[ERROR] Failed to run command ${interaction.commandName} - why: ${e}`
		);
	}
};
export const name = 'interactionCreate';

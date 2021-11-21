import { subcommands } from '../../static/Configs';
import { SubCommand } from '../../interfaces/ConfigCommand';
import { RunFunction } from "../../interfaces/Command"
export const run: RunFunction = async (client, interaction) => {
	return interaction.reply({
        embeds: [
            client.embed({ description: subcommands.map(
                    (value: SubCommand) =>
                        `${value.key.toLowerCase()}: \`${value.description} - For: ${
                            value.schema
                        }\``
                )
                .join('\n')},interaction)
        ]
    })
};
export const name: string = 'configlist';
export const category: string = 'config';
export const description: string = 'Get all the possible config options';
import { RunFunction } from '../../interfaces/Command';
export const name: string = 'autoresponder';
export const run: RunFunction = async (client, message, args) => {
	if (
		!args[0] ||
		!['create', 'delete', 'alias'].includes(args[0].toLowerCase())
	)
		return message.channel.send(
			client.embed(
				{
					description: `
                    Pick a sub command!
                    \`create\` <name> <content>
                    Examples:
                    create hello Hello! :wave:
                    User: hello
                    Bot: Hello! :wave:
                    \`alias\` <name> <..alias>
                    Examples:
                    alias hello hi hey
                    User: hey
                    Bot: Hello! :wave:
                    User: hi
                    Bot: Hello! :wave:
                    \`delete\` <name>
                    Examples:
                    delete hello
                    `.trim(),
				},
				message
			)
		);
	if (args[0].toLowerCase() == 'create') {
		const AutoSchema = await client.db.load('guildautoresponder');
		if (!args[1])
			return message.channel.send(
				client.embed({ description: 'No name specified!' }, message)
			);
		if (!args[2])
			return message.channel.send(
				client.embed({ description: 'No content specified!' }, message)
			);
		const name: string = args[1].toLowerCase();
		const content = args.slice(2).join(' ');
		await AutoSchema.create({
			Guild: message.guild.id,
			Trigger: name,
			Content: content,
		});
		return await message.channel.send(
			client.embed({ description: `Created trigger!` }, message)
		);
	}
};
export const category: string = 'config';
export const userPermissions: string = 'MANAGE_GUILD';
export const aliases: string[] = ['ar'];
export const usage: string = '[create | delete | list] [command arguments]';

import { RunFunction } from '../../interfaces/Event';
import { Anything } from '../../interfaces/Anything';
import { Message, TextChannel, Util } from 'discord.js';

export const run: RunFunction = async (
	client,
	oldMessage: Message,
	newMessage: Message
) => {
	if (oldMessage.partial) await oldMessage.fetch();
	if (newMessage.author.bot) return;
	const GuildConfigSchema = await client.db.load('guildconfig');
	const GuildConfig = await GuildConfigSchema.findOne({
		Guild: oldMessage.guild.id,
	});
	if (!GuildConfig) return;
	if ((GuildConfig as Anything)?.MessageLogsChannel) {
		const channel: TextChannel = client.channels.cache.get(
			(GuildConfig as Anything).MessageLogsChannel
		) as TextChannel;
		if (!channel) return;
		if (!channel.permissionsFor(oldMessage.guild.me).has('SEND_MESSAGES'))
			return;
		await channel.send(
			client.embed(
				{
					description: `
        Message edited by ${oldMessage.author.tag} (${newMessage.author}) in ${
						oldMessage.channel
					}.
        Old content
        ${Util.escapeMarkdown(oldMessage.content)}
        New content
        ${Util.escapeMarkdown(newMessage.content)}`.trim(),
				},
				oldMessage
			)
		);
	} else return;
};
export const name: string = 'messageUpdate';

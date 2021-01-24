import { RunFunction } from '../../interfaces/Event';
import { VoiceState, VoiceChannel } from 'discord.js';
export const run: RunFunction = async (
	client,
	oldState: VoiceState,
	newState: VoiceState
) => {
	if (!oldState || !oldState?.channel?.members?.has(client.user.id)) return;
	if (newState.member.id == client.user.id) return;
	if (
		(client.guilds.cache
			.get(oldState.guild.id)
			.channels.cache.get(oldState.channelID) as VoiceChannel)?.members?.size <
		2
	)
		return client.music.dispatchers
			.get(oldState.guild.id)
			.destroy(
				client.music.dispatchers.get(oldState.guild.id).destroyed,
				'everyone else left'
			);
};
export const name: string = 'voiceStateUpdate';

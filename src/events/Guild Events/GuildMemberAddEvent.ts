import { GuildMember } from 'discord.js';
import { RunFunction } from '../../interfaces/Event';
export const name: string = 'guildMemberAdd';
export const run: RunFunction = async (client, member: GuildMember) =>
	member.fetch(true);

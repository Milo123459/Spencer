import {
	CommandInteraction,
	PermissionResolvable,
	ApplicationCommandOption,
} from 'discord.js';
import { Spencer } from '../client/Client';

export interface RunFunction {
	(client: Spencer, interaction: CommandInteraction): Promise<unknown>;
}
export interface Command {
	name: string;
	run: RunFunction;
	description: string;
	cooldown?: number;
	category: string;
	userPermissions?: PermissionResolvable | PermissionResolvable[];
	ownerOnly?: boolean;
	usage?: string;
	options?: ApplicationCommandOption[];
}

import { RunFunction } from '../../interfaces/Event';
import { RateLimitData } from 'discord.js';
import ms from 'ms';
export const name: string = 'rateLimit';
export const run: RunFunction = async (client, rateLimit: RateLimitData) => {
	client.logger.warn(
		`${rateLimit.path} (${rateLimit.route}) is being rate limited. ${
			rateLimit.limit
		} requests can be made every ${ms(rateLimit.timeout, { long: true })}`
	);
};

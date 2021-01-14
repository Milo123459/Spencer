import { RunFunction } from '../../interfaces/Command';
import { GuildMember } from 'discord.js';
import { Anything } from '../../interfaces/Anything';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return client.utils.fail(
			message,
			{ description: 'Please provide someone to rob...' },
			'rob'
		);
	const member: GuildMember = client.utils.ResolveMember(message, args[0]);
	if (!member)
		return client.utils.fail(
			message,
			{ description: "I couldn't find that user!" },
			'rob'
		);
	if (member.id == message.author.id)
		return client.utils.fail(
			message,
			{ description: "You can't rob yourself..." },
			'rob'
		);
	const EconomySchema = await client.db.load('usereconomy');
	const RobberProfile = await EconomySchema.findOne({
		User: message.author.id,
	});
	const TargetProfile = await EconomySchema.findOne({ User: member.id });
	if (!RobberProfile)
		return client.utils.fail(
			message,
			{ description: "Your profile doesn't exist..." },
			'rob'
		);
	if (!TargetProfile)
		return client.utils.fail(
			message,
			{ description: "Their profile doesn't exist..." },
			'rob'
		);
	if (500 > (RobberProfile as Anything)?.Coins)
		return client.utils.fail(
			message,
			{
				description:
					'You need atleast 500 coins in your wallet before robbing someone...',
			},
			'rob'
		);
	if (500 > (TargetProfile as Anything)?.Coins)
		return client.utils.fail(
			message,
			{
				description:
					"Uhhh, they have like no money in their wallet, it's not worth it, cancelling...",
			},
			'rob'
		);
	const ShouldRob = Math.floor(Math.random() * 100) > 50;
	if (!!!ShouldRob) {
		await message.channel.send(
			client.embed(
				{
					description:
						'Oh no, you got caught, play stupid games, win stupid prizes. Say bye to 500 coins :)',
				},
				message
			)
		);
		return EconomySchema.decrement({ User: message.author.id }, 'Coins', 500);
	} else {
		const Amount =
			Math.floor(Math.random() * ((TargetProfile as Anything)?.Coins || 1)) / 2;
		await EconomySchema.decrement({ User: member.id }, 'Coins', Amount);
		await EconomySchema.increment({ User: message.author.id }, 'Coins', Amount);
		return message.channel.send(
			client.embed(
				{
					description: `Damn bro you stole **${Amount}** coins from **${member.displayName}**`,
				},
				message
			)
		);
	}
};
export const name: string = 'rob';
export const category: string = 'economy';
export const cooldown: number = 1000 * 60;
export const usage: string = '<user>';
export const description: string = 'Rob someone';

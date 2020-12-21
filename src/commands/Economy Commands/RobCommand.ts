import { RunFunction } from '../../interfaces/Command';
import { GuildMember } from 'discord.js';
import { Anything } from '../../interfaces/Anything';

export const run: RunFunction = async (client, message, args) => {
	if (!args.length)
		return await message.channel.send(
			client.embed({ description: 'Please provide someone to rob...' }, message)
		);
	const member: GuildMember = client.utils.ResolveMember(message, args[0]);
	if (!member)
		return await message.channel.send(
			client.embed({ description: "I couldn't find that user!" }, message)
		);
	if (member.id == message.author.id)
		return await message.channel.send(
			client.embed(
				{ description: 'You tried to rob your self, god, how dumb are you?' },
				message
			)
		);
	const EconomySchema = await client.db.load('usereconomy');
	const RobberProfile = await EconomySchema.findOne({
		User: message.author.id,
	});
	const TargetProfile = await EconomySchema.findOne({ User: member.id });
	if (!RobberProfile)
		return await message.channel.send(
			client.embed({ description: "You're profile doesn't exist..." }, message)
		);
	if (!TargetProfile)
		return await message.channel.send(
			client.embed({ description: "Their profile doesn't exist..." }, message)
		);
	if (500 > (RobberProfile as Anything)?.Coins)
		return await message.channel.send(
			client.embed(
				{
					description:
						'You need atleast 500 coins in your wallet before robbing someone...',
				},
				message
			)
		);
	if (500 > (TargetProfile as Anything)?.Coins)
		return await message.channel.send(
			client.embed(
				{
					description:
						"Uhhh, they have like no money in their wallet, it's not worth it, cancelling...",
				},
				message
			)
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
		return await EconomySchema.decrement(
			{ User: message.author.id },
			'Coins',
			500
		);
	} else {
		const Amount =
			Math.floor(Math.random() * ((TargetProfile as Anything)?.Coins || 1)) / 2;
		await EconomySchema.decrement({ User: member.id }, 'Coins', Amount);
		await EconomySchema.increment({ User: message.author.id }, 'Coins', Amount);
		return await message.channel.send(
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

import { Message, TextChannel } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	const UserEconomySchema = await client.db.load('usereconomy');
	const msg: Message = await message.channel.send(
		client.embed(
			{ description: `📇 Play a game of double or nothing!` },
			message
		)
	);
	try {
		const reaction: string = await client.utils.awaitReactions(
			message.author.id,
			msg,
			['📇']
		);
		if (reaction == '📇') {
			try {
				await msg.edit(
					client.embed(
						{
							description:
								'How much money do you want to bet? Note, the money has to be in your wallet!',
						},
						message
					)
				);
				const m: Message = await client.utils.awaitMessages(
					message.author.id,
					message.channel as TextChannel
				);
				const balance = await client.utils.calculateMoney(
					message.author.id,
					m.content,
					'Coins'
				);
				if (balance == 0)
					return await msg.edit(
						client.embed({ description: "You can't bet nothing.." }, message)
					);
				const shouldDouble: number = Math.floor(Math.random() * 100);
				console.log(shouldDouble);
				if (shouldDouble > 50) {
					await UserEconomySchema.increment(
						{ User: message.author.id },
						'Coins',
						balance
					);
					return await msg.edit(
						client.embed(
							{
								description: `Congratulations, you have gotten **${
									balance * 2
								}** coins from that!`,
							},
							message
						)
					);
				} else {
					await UserEconomySchema.decrement(
						{ User: message.author.id },
						'Coins',
						balance
					);
					return await msg.edit(
						client.embed(
							{ description: `You lost **${balance}** coins..` },
							message
						)
					);
				}
			} catch {
				return await msg.edit("Nice one, you didn't respond.");
			}
		}
	} catch {
		return await msg.edit("Nice one, you didn't respond.");
	}
};

export const cooldown: number = 30 * 1000;
export const description: string = 'Test your luck in gamble!';
export const name: string = 'gamble';
export const category: string = 'economy';

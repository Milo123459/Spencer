import { Message, TextChannel } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, interaction) => {
	const UserEconomySchema = await client.db.load('usereconomy');
	const msg: Message = await interaction.reply({
		embeds: [
			client.embed(
				{ description: `📇 Play a game of double or nothing!` },
				interaction
			),
		],
	});
	try {
		const reaction: string = await client.utils.awaitReactions(
			interaction.user.id,
			msg,
			['📇']
		);
		try {
			await msg.reactions.removeAll();
		} catch {}
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
					interaction.user.id,
					message.channel as TextChannel
				);
				const balance = await client.utils.calculateMoney(
					interaction.user.id,
					m.content,
					'Coins'
				);
				try {
					await m.delete();
				} catch {}
				if (balance == 0)
					return await msg.edit(
						client.embed({ description: "You can't bet nothing.." }, message)
					);
				if (balance > 10000)
					return await client.utils.fail(
						message,
						{ description: 'You can only bet less then 10000!' },
						'gamble'
					);
				const shouldDouble: boolean = client.utils.randomElement([true, false]);
				if (shouldDouble == true) {
					await UserEconomySchema.increment(
						{ User: interaction.user.id },
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
						{ User: interaction.user.id },
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
		try {
			await msg.reactions.removeAll();
		} catch {}
		return msg.edit("Nice one, you didn't respond.");
	}
};

export const cooldown: number = 30 * 1000;
export const description: string = 'Test your luck in gamble!';
export const name: string = 'gamble';
export const category: string = 'economy';
export const options: import("discord.js").ApplicationCommandOption[] = []
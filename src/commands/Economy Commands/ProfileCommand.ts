import { RunFunction } from '../../interfaces/Command';
import { Anything } from '../../interfaces/Anything';
import { addProp } from 'tyvn';
import { items } from '../../static/Items';

export const run: RunFunction = async (client, message, args) => {
	const EconomySchema = await client.db.load('usereconomy');
	const User: string =
		client.utils.ResolveMember(message, args[0])?.id || message.author.id;
	const UserCoins = await EconomySchema.findOne({ User });
	const Inventory = (UserCoins as Anything)?.Inventory || {};
	return message.channel.send(
		client.embed(
			{
				fields: [
					client.utils.constructField(
						'User',
						`Tag: **${message.guild.member(User).user.tag}**\nID: **${User}**`,
						true
					),
					client.utils.constructField(
						'Coins',
						`
        Wallet: **${(UserCoins as Anything)?.Coins || 0}**
        Bank: **${(UserCoins as Anything)?.DepositedCoins || 0}**
        Total: **${addProp<{ Coins?: Number; DepositedCoins?: number }>(
					['Coins', 'DepositedCoins'],
					0,
					0,
					UserCoins as Anything
				)}**`,
						true
					),
					client.utils.constructField(
						'Inventory',
						`
        Unique amount of items: **${Object.entries(Inventory).length}**
        Item they have the most of: **${
					items.find(
						(v) =>
							v.id ==
							Object.entries(Inventory).sort(
								(a, b) => (b[1] as number) - (a[1] as number)
							)[0]?.[0]
					)?.name || 'Nothing.'
				}**
        `,
						true
					),
				],
			},
			message
		)
	);
};
export const name: string = 'profile';
export const category: string = 'economy';
export const description: string = 'A cool command';

import { RunFunction } from '../../interfaces/Command';
import { ApplicationCommandOption, GuildMember } from 'discord.js';

export const run: RunFunction = async (client, interaction) => {
	const member = await interaction.guild.members.fetch(
		interaction.options.get('user', true).value as string
	);

	if (member.id == interaction.user.id)
		return client.utils.fail(
			interaction,
			{ description: "You can't rob yourself..." },
			'rob'
		);
	const EconomySchema = await client.db.load('usereconomy');
	const RobberProfile = await EconomySchema.findOne({
		User: interaction.user.id,
	});
	const TargetProfile = await EconomySchema.findOne({ User: member.id });
	if (!RobberProfile)
		return client.utils.fail(
			interaction,
			{ description: "Your profile doesn't exist..." },
			'rob'
		);
	if (!TargetProfile)
		return client.utils.fail(
			interaction,
			{ description: "Their profile doesn't exist..." },
			'rob'
		);
	if (500 > (RobberProfile as any)?.Coins)
		return client.utils.fail(
			interaction,
			{
				description:
					'You need atleast 500 coins in your wallet before robbing someone...',
			},
			'rob'
		);
	if (500 > (TargetProfile as any)?.Coins)
		return client.utils.fail(
			interaction,
			{
				description:
					"Uhhh, they have like no money in their wallet, it's not worth it, cancelling...",
			},
			'rob'
		);
	if (
		((TargetProfile as any)?.Inventory || {})['padlock'] &&
		((TargetProfile as any)?.Inventory || {})['padlock'] > 0
	) {
		await client.utils.decrementItem(member.id, 'padlock');
		EconomySchema.decrement({ User: interaction.user.id }, 'Coins', 500);
		return interaction.reply({
			embeds: [
				client.embed(
					{ description: 'Ahhhhh they had a padlock on! You lose 500 coins.' },
					interaction
				),
			],
		});
	}
	const ShouldRob = Math.floor(Math.random() * 100) > 50;
	if (!!!ShouldRob) {
		await interaction.reply({
			embeds: [
				client.embed(
					{
						description:
							'Oh no, you got caught, play stupid games, win stupid prizes. Say bye to 500 coins :)',
					},
					interaction
				),
			],
		});
		return EconomySchema.decrement({ User: interaction.user.id }, 'Coins', 500);
	} else {
		const Amount =
			Math.floor(Math.random() * ((TargetProfile as any)?.Coins || 1)) / 2;
		await EconomySchema.decrement({ User: member.id }, 'Coins', Amount);
		await EconomySchema.increment(
			{ User: interaction.user.id },
			'Coins',
			Amount
		);
		return interaction.reply({
			embeds: [
				client.embed(
					{
						description: `Damn bro you stole **${Amount}** coins from **${member.displayName}**`,
					},
					interaction
				),
			],
		});
	}
};
export const name: string = 'rob';
export const category: string = 'economy';
export const cooldown: number = 1000 * 60;
export const usage: string = '<user>';
export const description: string = 'Rob someone';
export const options: ApplicationCommandOption[] = [
	{
		name: 'user',
		description: 'The user to rob',
		type: 'USER',
	},
];

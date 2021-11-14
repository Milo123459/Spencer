import {
	Message,
	MessageActionRow,
	MessageButton,
	MessageComponentInteraction,
} from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
import { Job } from '../../interfaces/Job';
import { Jobs } from '../../static/Jobs';

export const run: RunFunction = async (client, interaction) => {
	const EconomySchema = await client.db.load('usereconomy');
	const msg = await interaction.reply({
		embeds: [
			client.embed(
				{
					description: `Please pick a job by clicking one of the buttons below.\n${Jobs.map(
						(value: Job) =>
							`${value.reaction} **${value.name}**: ${value.description}`
					).join('\n')}`,
				},
				interaction
			),
		],
		fetchReply: true,
		components: [
			new MessageActionRow().addComponents(
				Jobs.map((job) =>
					new MessageButton()
						.setEmoji(job.reaction)
						.setCustomId(job.name.toLowerCase().replaceAll(' ', '_'))
				)
			),
		],
	});
	try {
		const newJob = (msg as Message).createMessageComponentCollector({
			filter: (_interaction) => _interaction.user.id == interaction.user.id,
			time: 30000,
			max: 1,
		});
		let job: Job;
		newJob.on(
			'collect',
			async (interaction_found: MessageComponentInteraction) => {
				await EconomySchema.update(
					{ User: interaction.user.id },
					{
						Job: Jobs.find((value: Job) => {
							const formatted = value.name.toLowerCase().replaceAll(' ', '_');
							if (formatted == interaction_found.customId) {
								job = value;
								return true;
							} else {
								return false;
							}
						}),
					}
				);

				await interaction.editReply({
					embeds: [
						client.embed(
							{
								description: `Woohoo! You\'re now a${
									job?.n ? 'n' : ''
								} **${job.name.toLowerCase()}**`,
							},
							interaction
						),
					],
					components: [],
				});
			}
		);
	} catch (e) {
		await interaction.editReply({
			embeds: [
				client.embed(
					{ description: `Nice one, you didn\'t respond.` },
					interaction
				),
			],
			components: [],
		});
	}
};
export const name: string = 'setjob';
export const category: string = 'economy';
export const description: string = 'Set a job';
export const options: import("discord.js").ApplicationCommandOption[] = []
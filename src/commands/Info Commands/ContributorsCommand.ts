import { RunFunction } from '../../interfaces/Command';
import { GithubUser } from '../../interfaces/GithubUser';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message) => {
	fetch('https://api.github.com/repos/milo123459/Spencer/contributors')
		.then((res) => res.json())
		.then((res) => {
			const fieldArray = [];

			res.map((user: GithubUser) => {
				if (user.login.toLowerCase().includes('bot')) return;
				fieldArray.push({
					name: user.login,
					value: `${user.contributions} commits!`,
					inline: false,
				});
			});
			const embed = client.embed(
				{ title: 'Contributors', fields: fieldArray },
				message
			);
			return message.channel.send(embed);
		});
};
export const aliases: string[] = ['helpers', 'contributions'];
export const name: string = 'contributors';
export const category: string = 'info';

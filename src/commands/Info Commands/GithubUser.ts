import { RunFunction } from '../../interfaces/Command';
import { GithubUser } from '../../interfaces/GithubUser';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message, args) => {
	const user = args.join(' ');
	if (!args[0]) {
		return message.channel.send(
			client.embed({ title: '❌ Please Enter a Username!' }, message)
		);
	}
	fetch(`https://api.github.com/users/${user}`)
		.then((res) => res.json())
		.then((res: GithubUser) => {
			if (!res.login) {
				return message.channel.send(
					client.embed(
						{
							title: `${client.utils.randomElement([
								'🤷‍♀️',
								'🤷‍♂️',
							])} That github user does not exist!`,
						},
						message
					)
				);
			}
			return message.channel.send(
				client.embed(
					{
						title: `Info on ${res.login}`,
						fields: [
							{ name: `Name`, value: `${res.name}`, inline: false },
							{
								name: 'Email',
								value: `${res.email ? res.email : 'None Provided'}`,
							},
							{ name: 'Bio', value: `${res.bio ? res.bio : 'None Provided'}` },
							{
								name: 'Company',
								value: `${res.company ? res.company : 'None Provided'}`,
								inline: false,
							},
							{
								name: 'Location',
								value: `${res.location ? res.location : 'None Provided'}`,
								inline: false,
							},
							{
								name: 'Hireable',
								value: `${res.hireable ? 'Yes' : 'No'}`,
								inline: false,
							},
							{
								name: 'Followers',
								value: `${res.followers ? res.followers : 0}`,
								inline: false,
							},
							{
								name: 'Following',
								value: `${res.following ? res.following : 0}`,
								inline: false,
							},
							{
								name: 'Public Repository Count',
								value: `${res.public_repos ? res.public_repos : 0}`,
								inline: false,
							},
							{
								name: 'Public Gists Count',
								value: `${res.public_gists ? res.public_gists : 0}`,
								inline: false,
							},
							{
								name: 'Account Creation Date',
								value: res.created_at,
								inline: false,
							},
							{
								name: 'Account Last Updated',
								value: `${res.created_at ? res.created_at : 'Never Updated'}`,
							},
						],
					},
					message
				)
			);
		});
};
export const aliases: string[] = ['gh-user', 'ghuser', 'github-user'];
export const name: string = 'githubuser';
export const category: string = 'info';

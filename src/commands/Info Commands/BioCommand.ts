import { Bio } from '../../interfaces/Bio';
import { RunFunction } from '../../interfaces/Command';
import fetch from 'node-fetch';

export const run: RunFunction = async (client, message, args) => {
	const member = client.utils.ResolveMember(message, args[0]) || message.member;
	const apiResponse: Bio = await fetch(
		`https://api.discord.bio/user/details/${member.id}`
	).then((res) => res.json());
	if (apiResponse.message)
		return message.channel.send(
			client.embed({ description: apiResponse.message }, message)
		);
	return await message.channel.send(
		client.embed(
			{
				description: `
    Go to **[${member.displayName}](https://dsc.bio/${apiResponse.payload.user.details.slug})**
    Staff? ${apiResponse.payload.user.details.staff}
    Premium? ${apiResponse.payload.user.details.premium}
    Verified? ${apiResponse.payload.user.details.verified}
    Likes: ${apiResponse.payload.user.details.likes}
    `,
			},
			message
		)
	);
};
export const name: string = 'bio';
export const category: string = 'info';

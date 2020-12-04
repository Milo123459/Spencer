export interface Bio {
	payload?: Payload;
	message?: string;
}

export interface Payload {
	user: User;
	discord: Discord;
}

export interface Discord {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
}

export interface User {
	details: Details;
}

export interface Details {
	slug: string;
	user_id: string;
	flags: number;
	verified: boolean;
	premium_type: number;
	created_at: string;
	description: string;
	location: string;
	gender: number;
	birthday: null;
	email: null;
	occupation: string;
	banner: null;
	premium: boolean;
	staff: boolean;
	likes: number;
}

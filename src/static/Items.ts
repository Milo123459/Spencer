import { Item } from '../interfaces/Item';

export const items: Array<Item> = [
	{
		name: 'Padlock',
		description: 'Prevent people from robbing you!',
		price: 5000,
		id: 'padlock',
	},
	{
		name: 'Dviih',
		description: 'You have 1 million coins and you wasted it on a rank',
		price: 1000000,
		id: 'dviihrank',
		unique: true,
	},
];

import { Document, Model } from 'mongoose';

export interface Schema {
	name: string;
	data: Model<Document>;
	[key: string]: any;
}

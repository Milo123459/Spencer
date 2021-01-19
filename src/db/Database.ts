import { Spencer } from '../client/Client';
import { Schema } from '../interfaces/Schema';
import { Anything } from '../interfaces/Anything';
import { SortFunction } from '../interfaces/SortFunction';
import { Document } from 'mongoose';

class DatabaseModule {
	private schema: Schema;
	public constructor(schema: Schema) {
		this.schema = schema;
	}
	public async update(find: object, update: object) {
		const existingData = await this.schema.data.findOne(find);
		if (!existingData) return this.create({ ...find, ...update });
		else if (existingData) {
			Object.entries(update).map((value) => {
				existingData[value[0]] = value[1];
			});
			await existingData.save();
			return existingData;
		}
	}
	public async create(data: object) {
		const NewModel = new this.schema.data(data);
		await NewModel.save();
		return NewModel;
	}
	public async findOne(data: object) {
		const Data = await this.schema.data.findOne(data);
		return Data;
	}
	public async find(data: object): Promise<Array<any>> {
		const Data = await this.schema.data.find(data);
		return Data;
	}
	public async delete(data: object) {
		const Data = await this.findOne(data); // get data
		if (!Data) return false;
		// if no data, return false
		else await Data.deleteOne(); // if exists delete
		return true; // return true because the data exists & was deleted
	}
	public async increment(search: object, key: string, value: number) {
		// increment a number by whatever
		const data = await this.findOne(search);
		if (!data) {
			const newData: object = { ...search };
			newData[key] = value;
			return this.create(newData);
		} else {
			if ((data as Anything)[key]) {
				if (isNaN((data as Anything)[key])) {
					(data as Anything)[key] = value;
					await data.save();
					return data;
				}
			}
			(data as Anything)[key]
				? ((data as Anything)[key] += value)
				: ((data as Anything)[key] = value);
			await data.save();
			return data;
		}
	}
	public async decrement(search: object, key: string, value: number) {
		// decrement a number by whatever
		const data = await this.findOne(search);
		if (!data) {
			const newData: object = { ...search };
			newData[key] = -value;
			return this.create(newData);
		} else {
			if ((data as Anything)[key]) {
				if (
					isNaN((data as Anything)[key]) ||
					(data as Anything)[key] == undefined
				) {
					(data as Anything)[key] = 0;
					await data.save();
					return data;
				}
			}
			(data as Anything)[key] -= value;
			if ((data as Anything)[key] < 0) {
				(data as Anything)[key] = 0;
			}
			await data.save();
			return data;
		}
	}
	public async leaderboard(sort: SortFunction) {
		// create a leaderboard
		const Data: Array<Document> = [...(await this.find({}))].sort(sort);
		return Data.length > 9 ? Data.slice(0, 10) : Data;
	}
}
class DatabaseManager {
	private client: Spencer;
	public constructor(client: Spencer) {
		this.client = client;
		this.client.logger.info(`Database has been constructed`);
	}
	public async load(schema: string) {
		const Model = this.client.schemas.get(schema) as Schema;
		return new DatabaseModule(Model);
	}
}

export { DatabaseManager, DatabaseModule };

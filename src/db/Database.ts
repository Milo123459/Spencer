import { Spencer } from '../client/Client';
import { Schema } from '../interfaces/Schema';
class DatabaseModule {
	private schema: Schema;
	public constructor(schema: Schema) {
		this.schema = schema;
	}
	public async update(find: object, update: object) {
		const existingData = await this.schema.data.findOne(find);
		if (!existingData) return await this.create({ ...find, ...update });
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
}
class DatabaseManager {
	private client: Spencer;
	public constructor(client: Spencer) {
		this.client = client;
	}
	public async load(schema: string) {
		const Model = this.client.schemas.get(schema) as Schema;
		return new DatabaseModule(Model);
	}
}

export { DatabaseManager, DatabaseModule };

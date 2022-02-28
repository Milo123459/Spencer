import 'dotenv/config';

import { Config } from './interfaces/Config';
import { Spencer } from './client/Client';

const BotConfig: Config = {
	mongoURI: process.env.MONGO_URI,
	owners: [process.env.OWNERS],
	prefix: 'sp!',
	token: process.env.TOKEN,
};

new Spencer().start(BotConfig);

import { Config } from './interfaces/Config';
import { config } from "dotenv";
config();
const BotConfig: Config = {
    mongoURI: process.env.MONGO_URI,
    owners: [process.env.OWNERS],
    prefix: "sp!",
    token: process.env.TOKEN,
};
import { Spencer } from './client/Client';
new Spencer().start(BotConfig);

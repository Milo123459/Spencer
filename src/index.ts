import { Config } from './interfaces/Config';
import * as File from '../config.json';
const BotConfig: Config = File;
import { Spencer } from './client/Client';
new Spencer().start(BotConfig);

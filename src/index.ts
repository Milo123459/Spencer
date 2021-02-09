import { Config } from './interfaces/Config';
// @ts-ignore
import * as File from '../config.json';
const BotConfig: Config = File;
import { Spencer } from './client/Client';
new Spencer().start(BotConfig);

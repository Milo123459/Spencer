import { RunFunction } from '../../interfaces/Event';
import mongoose from 'mongoose';
import { EventEmitter } from 'events';
export const name: string = 'error';
export const run: RunFunction = async (client, error: unknown) => {
	client.logger.error(`DB: error`);
};
export const emitter: EventEmitter = mongoose.connection;

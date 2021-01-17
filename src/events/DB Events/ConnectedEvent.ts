import { RunFunction } from '../../interfaces/Event';
import mongoose from 'mongoose';
import { EventEmitter } from 'events';
export const name: string = 'connected';
export const run: RunFunction = async (client) => {
	client.logger.success(`MongoDB is now connected!`);
};
export const emitter: EventEmitter = mongoose.connection;

import { Spencer } from '../client/Client';
import { EventEmitter } from 'events';
export interface RunFunction {
	(client: Spencer, ...params: unknown[]): Promise<void>;
}
export interface Event {
	name: string;
	run: RunFunction;
	emitter?: EventEmitter;
}

import { Spencer } from '../client/Client';
import { EventEmitter } from 'events';
export interface RunFunction {
	(client: Spencer, ...params: unknown[]): Promise<unknown>;
}

export interface FunctionForEE {
	(client: Spencer): EventEmitter;
}
export interface Event {
	name: string;
	run: RunFunction;
	emitter?: EventEmitter | FunctionForEE;
}

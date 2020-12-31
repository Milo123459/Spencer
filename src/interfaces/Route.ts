import { Request, Response, NextFunction } from 'express';
import { Spencer } from '../client/Client';

export interface RunFunction {
	(
		client: Spencer,
		request: Request,
		response: Response,
		next?: NextFunction
	): Promise<unknown>;
}

export interface Middleware {
	(request: Request, respones: Response, next?: NextFunction):
		| unknown
		| Promise<unknown>;
}

export type Method = 'get' | 'post' | 'put' | 'delete';

export interface Route {
	run: RunFunction;
	path: string;
	method: Method;
	middlewares?: Array<string>;
}

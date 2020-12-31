import express, { Application } from 'express';
import { Middleware, Route } from '../interfaces/Route';
import { get } from 'dot-prop';
import http from 'http';
import { Spencer } from '../client/Client';

class Server {
	public server: Application;
	public client: Spencer;
	public constructor(client: Spencer) {
		this.server = express();
		this.client = client;
	}
	public serve(): http.Server {
		this.client.routes.map((value: Route) => {
			const middlewares: Array<Middleware> = [];
			if (value.middlewares?.length)
				value.middlewares.map((value: string) =>
					middlewares.push(get(this.client, value) as Middleware)
				);
			this.server[value.method](value.path, ...middlewares, (req, res, next) =>
				value.run(this.client, req, res, next)
			);
		});

		return this.server.listen(this.client.config.webPort, () =>
			this.client.logger.success(
				`WebHook server listening on port ${this.client.config.webPort}`
			)
		);
	}
}

export { Server };

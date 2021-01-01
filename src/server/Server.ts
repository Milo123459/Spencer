import express, { Application } from 'express';
import { Middleware, Route } from '../interfaces/Route';
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
		const preDefinedMidllewares: Array<{ name: string; value: Middleware }> = [
			{ name: 'dbl', value: this.client.dblWebhook.middleware() },
		];
		this.client.routes.map((value: Route) => {
			const middlewares: Array<Middleware> = [];
			if (value.middlewares?.length)
				value.middlewares.map((value: string) => {
					if (preDefinedMidllewares.find((value_) => value_.name == value)) {
						preDefinedMidllewares.find((value_) => value_.name == value).value;
					}
				});
			this.server[value.method](
				value.path,
				...middlewares.map((value: Middleware) => (value as Function)()),
				(req, res, next) => value.run(this.client, req, res, next)
			);
		});

		return this.server.listen(this.client.config.webPort, () =>
			this.client.logger.success(
				`Webhook server listening on port ${this.client.config.webPort}`
			)
		);
	}
}

export { Server };

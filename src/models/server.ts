import express from 'express';

export class Server {
  public app: express.Application;
  public port: string | undefined;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(express.json());
  }

  routes() {}

  listen() {
    this.app.listen(this.port || 5151, () => {
      console.log('app running in the port ', this.port);
    });
  }
}

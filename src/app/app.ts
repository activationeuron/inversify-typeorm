import express, { Express } from 'express';
import busboy from 'busboy';
import { InversifyExpressServer } from 'inversify-express-utils';
import { DBContext } from '../business/data/data-source/db.context';
import { container } from '../container';
import bodyParser from 'body-parser';
import './routes/reader/index';
export class App {
  private port: number = 8080;

  async setup(): Promise<void> {
    const server = new InversifyExpressServer(container);

    server.setConfig((application: express.Application) => {
      application.use(express.urlencoded({ extended: true }));

      application.use(express.json({ limit: '100m' }));
    });

    const app = server.build();

    app.listen(this.port, () => {
      console.log(`server started at http://localhost:${this.port}`);
    });
  }
}

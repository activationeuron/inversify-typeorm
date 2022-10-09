import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from '../container';

import './routes/student/index';
// import './routes/group/index';
// import './routes/roll/index';
import { TYPES } from '../types';
import { connect } from '../business/data/data-source/pg/db.context';

export class App {
  private port: number = 8080;

  async setup(): Promise<void> {
    const server = new InversifyExpressServer(container);

    server.setConfig((application: express.Application) => {
      application.use(express.urlencoded({ extended: true }));

      application.use(express.json({ limit: '100m' }));
    });

    const app = server.build();
    await connect();
    app.listen(this.port, () => {
      console.log(`server started at http://localhost:${this.port}`);
    });
  }
}

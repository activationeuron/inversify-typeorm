import { injectable } from 'inversify';
import { Column, DataSource, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './entities/Group.entity';
import { Roll } from './entities/Roll.entity';

import { Student } from './entities/Student.entity';
// import { Student } from './entities/Student.entity';

// @injectable()
// export class PGContext {
//   public _pg: DataSource;
//   public manager: any;
//   constructor() {
//     console.log('Db context initialized');
//   }

//   async connect() {
//     console.log('database connected!!');
//     try {
//       this._pg = new DataSource({
//         type: 'postgres',
//         host: 'localhost',
//         port: 5432,
//         username: 'admin',
//         password: 'admin',
//         database: 'postgres',
//         migrationsTableName: 'migrations',
//         synchronize: true,
//         migrations: ['./migrations/**/*.ts'],
//         entities: [Student],
//       });
//       console.log(this._pg, 'PG context...');
//       await this._pg.initialize().then((res) => {
//         this.manager = res;
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

export let dbContext: DataSource;

export const connect = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'postgres',
    migrationsTableName: 'migrations',
    synchronize: true,
    migrations: ['./migrations/**/*.ts'],
    entities: [Student, Roll, Group],
  });

  dbContext = await dataSource.initialize();
};

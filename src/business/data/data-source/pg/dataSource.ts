import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'postgres',
  entities: ['../../entities/**/*.{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: true,

  migrations: [__dirname + '/migrations/*.ts'],
});

export default dataSource;

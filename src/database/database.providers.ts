import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: <string>process.env.PGHOST,
        port: <number>(process.env.PGPORT as unknown),
        username: <string>process.env.PGUSER,
        password: <string>process.env.PGPASSWORD,
        database: <string>process.env.PGDATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];

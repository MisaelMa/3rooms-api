import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DBNameConnection = 'signati';

function typeormModuleOptions(): TypeOrmModuleOptions {
  console.log(__dirname);
  return {
    type: 'mysql',
    // name: DBNameConnection,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    entities: [__dirname + '../../**/**/*entity{.ts,.js}'],
    autoLoadEntities: true,
    // We are using migrations, synchronize should be set to false.
    synchronize: Boolean(process.env.DATABASE_SYNC) || false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,
    logging: Boolean(process.env.DATABASE_LOGGING) || true,
    logger: 'file',

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      // Location of migration should be inside src folder
      // to be compiled into dist/ folder.
      migrationsDir: 'src/migrations',
    },
  };
}

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}));

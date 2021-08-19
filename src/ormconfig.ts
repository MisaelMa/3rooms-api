// You can load you .env file here synchronously using dotenv package (not installed here),
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { BaseConnectionOptions } from 'typeorm/connection/BaseConnectionOptions';

const environment = `environment/.env.${process.env.NODE_ENV || 'development'}`;
console.log(environment);
let config: BaseConnectionOptions;
if (fs.existsSync(`${environment}`)) {
  const processEnv: any = dotenv.parse(fs.readFileSync(`${environment}`));
  // tslint:disable-next-line:no-console
  console.log(`Migración corriendo --> en entorno ${environment}`);
  // tslint:disable-next-line:no-console
  console.log(`Migración corriendo --> en la base de datos ${processEnv.POSTGRES_DB}`);
  config = {
    type: 'mysql',
    // name: DBNameConnection,
    host: processEnv.DATABASE_HOST,
    migrationsTableName: 'migrations_typeorm',
    port: parseInt(processEnv.DATABASE_PORT) || 5432,
    username: processEnv.DATABASE_USER,
    password: processEnv.DATABASE_PASSWORD,
    database: processEnv.DATABASE_DB,
    autoLoadEntities: true,

    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    seeds: [__dirname + '/**/*.seed{.ts,.js}'],
    factories: [__dirname + '/**/*.factory{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    // We are using migrations, synchronize should be set to false.
    synchronize: false,
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,
    logging: 'all',
    logger: 'simple-console',

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    cli: {
      // Location of migration should be inside src folder
      // to be compiled into dist/ folder.
      migrationsDir: 'src/migrations',
      entitiesDir: 'src/entity',
      subscribersDir: 'src/subscriber',
    },
  } as BaseConnectionOptions;
  //console.log(config)
}
export = config;

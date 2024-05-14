import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const configAsync: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  }),
};

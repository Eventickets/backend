import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from 'src/entities';

export default registerAs<TypeOrmModuleOptions>('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT || 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: entities,
  synchronize: true,
}));

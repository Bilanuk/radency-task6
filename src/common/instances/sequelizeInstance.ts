import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
dotenv.config();
import { Note } from './../../modules/notes/models/note.model';

const sequelizeInstance = new Sequelize({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  models: [Note],
});

export default sequelizeInstance;

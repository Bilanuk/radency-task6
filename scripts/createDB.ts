import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
});

pool.query(`CREATE DATABASE "${process.env.POSTGRES_DB}"`, (error) => {
  if (error) {
    console.error('Error creating database:', error);
  }
  console.log('Database created');
});

pool.end();

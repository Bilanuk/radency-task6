import pool from './../common/instances/pgInstance';

import * as dotenv from 'dotenv';
dotenv.config();

pool.query(`CREATE DATABASE "${process.env.POSTGRES_DB}"`, (error) => {
  if (error) {
    console.error('Error creating database:', error);
  }
  console.log('Database created');
});

pool.end();

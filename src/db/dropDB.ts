import pool from './../common/instances/pgInstance';

import * as dotenv from 'dotenv';
dotenv.config();

pool.query(`DROP DATABASE IF EXISTS "${process.env.POSTGRES_DB}"`, (error) => {
  if (error) {
    console.error('Error dropping database:', error);
  }
  console.log('Database dropped');
});

pool.end();

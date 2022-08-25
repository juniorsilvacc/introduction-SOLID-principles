import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'api_solid',
  port: 5432,
});

client.connect();

export { client };

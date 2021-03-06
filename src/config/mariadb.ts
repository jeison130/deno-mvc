import {mysql} from '../modules.ts';
const { Client } = mysql;

export const client = await new Client().connect({
  hostname: 'localhost',
  username: 'root',
  db: 'user',
  password: '12345678',
  port: 5306,
});

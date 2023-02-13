import { Pool } from 'pg';

let conn: any;

if (!conn) {
    conn = new Pool ({
        user: process.env.USER_NAME,
        password: process.env.DB_PASSWORD,
        host: process.env.HOST,
        port: process.env.DB_PORT,
        database: process.env.DATABASE
    });
}

export { conn };
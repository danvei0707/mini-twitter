import mysql from 'mysql2/promise';
import { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } from "../config/env.js";

let pool;

const dbTemp = { 
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
}
const dbConfig = { 
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
}

async function getPool(){
    try {
        if(!pool){
            const poolTemp = mysql.createPool(dbTemp);

            await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE}`);
            await poolTemp.end();

            pool = mysql.createPool(dbConfig);
        }
        return pool;
        

    } catch (error) {
        throw new Error(error.message);
    }
}

export { getPool };
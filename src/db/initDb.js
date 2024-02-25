import { getPool } from './getPool.js';
import { MYSQL_DATABASE } from '../config/env.js';

async function initDb(){
    try {
        const pool = await getPool();
        await pool.query(`USE ${MYSQL_DATABASE}`)
        await pool.query('DROP TABLE IF EXISTS tweets');
        await pool.query('DROP TABLE IF EXISTS users');
        await pool.query(`CREATE TABLE IF NOT EXISTS users 
        (
            id CHAR(36) PRIMARY KEY NOT NULL,
            username VARCHAR(30) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            role ENUM('admin', 'user') DEFAULT 'user',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP

        )`);
        await pool.query(`CREATE TABLE IF NOT EXISTS tweets 
        (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            userId CHAR(36) NOT NULL,
            text VARCHAR(280) NOT NULL,
            image VARCHAR(100),
            FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP

        )`);

        console.log({
            "success": "true",
            "message": "Base de datos iniciada correctamente"
        });
        process.exit(0);

    } catch (error) {
        console.log({
            "success": "false",
            "message": "Error al iniciar la base de datos"
        });
        console.error(error.message);
        process.exit(1)
    }
}

initDb();
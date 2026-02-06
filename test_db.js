import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
    host: process.env.SQL_HOST,
    database: process.env.SQL_DB,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    port: process.env.SQL_PORT,
};

async function checkConnection() {
    console.log("Testing connection to:", dbConfig.host);
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log("SUCCESS: Connected to database.");
        await connection.end();
    } catch (err) {
        console.error("FAILURE: Could not connect.");
        console.error("Error Code:", err.code);
        console.error("Error Message:", err.message);
    }
}

checkConnection();

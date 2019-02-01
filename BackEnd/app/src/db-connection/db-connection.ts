import mysql = require('mysql');

export const pool = mysql.createPool({
    host:"localhost",
    port:3306,
    database:"pos_system",
    user:"ssfs",
    password:"123456",
    connectionLimit: 10
});
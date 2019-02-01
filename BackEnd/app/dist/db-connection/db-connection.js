"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
exports.pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: "pos_system",
    user: "ssfs",
    password: "123456",
    connectionLimit: 10
});

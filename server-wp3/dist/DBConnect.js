"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mysql = require('mysql');
exports.dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mcf2035',
    port: '3306',
    database: 'wpdatabase',
    multipleStatements: true
});

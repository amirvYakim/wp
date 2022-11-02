"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.dbConnection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mcf2035',
    port: 3306,
    database: 'wpdatabase',
    multipleStatements: true
});

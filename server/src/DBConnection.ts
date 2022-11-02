import mysql from "mysql";

export const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mcf2035',
    port: 3306,
    database: 'wpdatabase',
    multipleStatements: true
})


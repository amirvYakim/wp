"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRowByField = void 0;
const DBConnection_1 = require("./DBConnection");
const getRowByField = (sqlQuery) => {
    return new Promise((resolve, rejects) => {
        DBConnection_1.dbConnection.query(sqlQuery, (err, result) => {
            if (err) {
                return rejects(err);
            }
            return resolve(result);
        });
    });
};
exports.getRowByField = getRowByField;

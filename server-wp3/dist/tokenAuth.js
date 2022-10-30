"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJWT = (req, res, next) => {
    console.log('test12345');
    const token = req.body.Headers["x-access-token"];
    console.log(req.body.data);
    if (!token) {
        res.send('You have no token');
    }
    else {
        jsonwebtoken_1.default.verify(token, 'someEnvString', (err, decoded) => {
            if (err) {
                res.json({ message: "authenticate failed" });
            }
            else {
                req.body.data = decoded.data;
                console.log('req.userId');
                console.log(req.body.data);
                next();
            }
        });
    }
};
exports.verifyJWT = verifyJWT;

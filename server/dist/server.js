"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const loginRouter_1 = __importDefault(require("./routers/loginRouter"));
const homePageRouter_1 = __importDefault(require("./routers/homePageRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const DBConnection_1 = require("./DBConnection");
const app = (0, express_1.default)();
const port = process.env.PORT || 5073;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/login', loginRouter_1.default);
app.use('/api/homepage', homePageRouter_1.default);
DBConnection_1.dbConnection.connect((err) => {
    if (err) {
        return console.log('error' + err.message);
    }
    else {
        console.log('MySQL connected');
    }
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

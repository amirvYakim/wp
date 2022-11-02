"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLoginData = void 0;
const loginDAL_1 = require("../DAL/loginDAL");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const sendLoginData = (eMail, passwrod) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sqlQuery = `SELECT * FROM wpdatabase.users WHERE email = '${eMail}'`;
        let sendLoginDataDALResp = yield (0, loginDAL_1.sendLoginDataDAL)(sqlQuery);
        let hashed_pw = sendLoginDataDALResp[0].hashed_pw;
        let isUserValid = yield bcryptjs_1.default.compare(passwrod, hashed_pw);
        console.log('isUserValid', isUserValid);
        if (isUserValid) {
            let firstName = sendLoginDataDALResp[0].name;
            let lastName = sendLoginDataDALResp[0].last_name;
            let permissions = sendLoginDataDALResp[0].permissions;
            const token = jsonwebtoken_1.default.sign({ eMail }, 'someEnvString');
            console.log(token);
            let loginRes = {
                firstName,
                lastName,
                permissions,
                token,
                isUserValid
            };
            return loginRes;
        }
        else {
            let loginRes = {
                isUserValid: false
            };
            return loginRes;
        }
    }
    catch (error) {
        return error;
    }
});
exports.sendLoginData = sendLoginData;

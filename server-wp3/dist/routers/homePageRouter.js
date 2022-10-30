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
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenAuth_1 = require("../tokenAuth");
//import * as usersModel from '../model/login';
const router = (0, express_1.Router)();
router.route('/').post(tokenAuth_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const RSA_PRIVATE_KEY = "someEnvString";
        req.userId = '12551';
        jsonwebtoken_1.default.verify(req.body.Headers['x-access-token'], RSA_PRIVATE_KEY, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('token is ok');
            }
        });
        console.log('homepage2');
        res.status(200).json({ message: 'homepage1', status: 200 });
    }
    catch (error) {
        res.status(404).json({ message: "Page Not Found", status: 404 });
    }
}));
exports.default = router;

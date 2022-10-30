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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLoginDataDAL = void 0;
const dataBase_1 = require("../dataBase");
const sendLoginDataDAL = (sqlQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let resp = yield (0, dataBase_1.getRowByField)(sqlQuery);
    return resp;
});
exports.sendLoginDataDAL = sendLoginDataDAL;

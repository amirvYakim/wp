import { query } from "express"
import { getRowByField } from "../dataBase"

export const sendLoginDataDAL = async (sqlQuery: string) => {
    let resp =  await getRowByField(sqlQuery)
    return resp
}
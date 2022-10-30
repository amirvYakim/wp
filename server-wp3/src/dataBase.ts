import { dbConnection } from './DBConnection'

export const getRowByField = (sqlQuery: string) => {
    return new Promise((resolve, rejects) => {

        dbConnection.query(sqlQuery, (err, result) => {
            if (err) {
                return rejects(err)
            }
            return resolve(result)
        })

    })
}
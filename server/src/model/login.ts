import { sendLoginDataDAL } from "../DAL/loginDAL";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export const sendLoginData = async (eMail: string, passwrod: string) => {

    try {

        let sqlQuery = `SELECT * FROM wpdatabase.users WHERE email = '${eMail}'`
        let sendLoginDataDALResp: any = await sendLoginDataDAL(sqlQuery)

        let hashed_pw = sendLoginDataDALResp[0].hashed_pw
        let isUserValid = await bcrypt.compare(passwrod, hashed_pw)
        console.log('isUserValid', isUserValid);
        

        if (isUserValid) {

            let firstName = sendLoginDataDALResp[0].name
            let lastName = sendLoginDataDALResp[0].last_name
            let permissions = sendLoginDataDALResp[0].permissions

            const token = jwt.sign({ eMail }, 'someEnvString')

            console.log(token);

            let loginRes: Object = {
                firstName,
                lastName,
                permissions,
                token,
                isUserValid
            }

            return loginRes

        } else {

            let loginRes: Object = {
                isUserValid: false
            }

            return loginRes
        }

    } catch (error) {

        return error

    }

}


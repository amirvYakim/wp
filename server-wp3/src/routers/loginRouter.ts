import { Router } from "express";
import * as usersModel from '../model/login';

const router = Router();

router.route('/').post(async (req: any, res: any) => {

    

    try {

        let eMail = req.body.data.eMail
        let passwrod = req.body.data.password
        
        let resp = await usersModel.sendLoginData(eMail, passwrod)

        res.status(200).json({ message: resp, status: 200 })

    } catch (error) {

        res.status(404).json({ message: "Page Not Found", status: 404 })

    }



})

export default router
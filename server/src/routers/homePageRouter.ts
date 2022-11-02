import { Router } from "express";
import jwt from 'jsonwebtoken';
import { verifyJWT } from "../tokenAuth";
//import * as usersModel from '../model/login';

const router = Router();

router.route('/').post(verifyJWT, async(req: any, res: any) => {

   
    try {

        
     
        const RSA_PRIVATE_KEY = "someEnvString";

        req.userId = '12551'


        


        jwt.verify(req.body.Headers['x-access-token'], RSA_PRIVATE_KEY, function(err: any): any{
            if(err){
                console.log(err);
                
            } else {
                console.log('token is ok');

            }

        })
        

        console.log('homepage2');



        res.status(200).json({ message: 'homepage1', status: 200 })

    } catch (error) {

        res.status(404).json({ message: "Page Not Found", status: 404 })

    }



})


export default router
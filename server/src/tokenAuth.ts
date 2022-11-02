import jwt from 'jsonwebtoken';

export const verifyJWT = (req: any, res: any, next: any) => {


    console.log('test12345');
    const token = req.body.Headers["x-access-token"];

    console.log(req.body.data);


    if (!token) {
        res.send('You have no token')
    } else {
        jwt.verify(token, 'someEnvString', (err: any, decoded: any) => {
            if (err) {
                res.json({ message: "authenticate failed" })
            } else {
                req.body.data = decoded.data;
                console.log('req.userId');
                console.log(req.body.data);
                next()
            }
        })
    }
}
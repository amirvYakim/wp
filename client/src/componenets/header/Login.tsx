import { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { userNamevalidator, loginDataReciver } from '../../functions/LoginF';
import Utils from '../../functions/Utils';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/ContextApi';



export default function Login() {

    const navigate = useNavigate()

    const { user, setUser } = useContext(UserContext)

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const submitUserNameAndPassword = async (eMail: string, password: String) => {

        let valRes = userNamevalidator(eMail, password);

        if (valRes === true) {

            let loginUrl = 'http://localhost:5073/api/login'
            let loginObj = { eMail, password }

            let loginResp = await Utils.postData(loginUrl, { data: loginObj })

            let loginDataReciverResp = await loginDataReciver(loginResp)
            loginDataReciverResp = loginDataReciverResp.data.message
            console.log(loginDataReciverResp);

            sessionStorage["token"] = loginDataReciverResp.token;
            sessionStorage["permissions"] = loginDataReciverResp.permissions;
            sessionStorage["user"] = loginDataReciverResp.firstName + ' ' + loginDataReciverResp.lastName

            let user = { name: loginDataReciverResp.firstName }

            setUser(user)

            navigate('/homepage')

        }

    }



    return (
        <div>
            <TextField
                required
                id="outlined"
                label="User name"
                defaultValue=""
                onChange={(ev) => setUserName(ev.target.value)}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(ev) => setPassword(ev.target.value)}
            />
          <Button variant="contained" onClick={() => submitUserNameAndPassword(userName, password)}>Login</Button>


        </div>
    )
}
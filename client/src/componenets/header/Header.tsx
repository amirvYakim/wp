import { useContext } from 'react';
import { UserContext } from '../../utils/ContextApi';
import Login from "./Login";
import LogOut from './LogOut';


export default function Header() {

    const { user } = useContext(UserContext)

    console.log(user);

    return (
        <div>

            {user ? <LogOut /> : <Login />}

        </div >
    )
}
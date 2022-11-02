import { useContext } from 'react';
import { Button } from "@mui/material";
import { UserContext } from '../../utils/ContextApi';

export default function LogOut() {

    const { setUser } = useContext(UserContext)
    return (
        <div>
            <Button variant="contained" onClick={() => setUser(null)}>Logout</Button>
        </div >
    )
}
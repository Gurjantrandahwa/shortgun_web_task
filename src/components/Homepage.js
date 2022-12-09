import React from 'react'
import {Button} from "@mui/material";
import {useUserAuth} from "../Common/UserAuthContext";

export default function Homepage() {

    const {user,logOut} = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (e) {
            console.log(e.message)
        }
    }
    console.log(user)
    return <div>
        this is a home page

        <Button variant={"contained"}
                onClick={handleLogOut}
        >
            log out
        </Button>
    </div>
}

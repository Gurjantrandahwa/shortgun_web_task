import React, {useState} from 'react'
import {useUserAuth} from "../Common/UserAuthContext";
import {Link, useNavigate} from "react-router-dom";
import {Alert, Button, TextField} from "@mui/material";


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const {signUp} = useUserAuth()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signUp(email, password)
            navigate("/")
        } catch (e) {
            setError(e.message)
        }
    }
    return <div className={"card"}>
        {error && <Alert severity="warning">{error}</Alert>}
        <img src={"https://www.moonstride.com/wp-content/uploads/2020/11/spaceship-footer.svg"}
             className={"rocket-img"} alt={""}/>
        <h3>Welcome to Bardeen</h3>
        <p>Let's log in to launch your automations</p>
        <form onSubmit={handleSubmit}>
            <TextField
                size="small"
                margin="dense"
                label="Email Address"
                fullWidth
                variant={"outlined"}
                name='email'
                type='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />


            <TextField
                className={"password"}
                size="small"
                margin="dense"
                label="Password"
                fullWidth
                variant={"outlined"}
                name='password'
                type='password'

                value={password}
                required
                onChange={e => setPassword(e.target.value)}
            />

            <div className={"link-wrapper"}>
                <Link to={"/"}> Login</Link>
                <Link>Forgot password?</Link>
            </div>
            <Button
                sx={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    backgroundColor: "#7600D8",
                    textTransform: "none"
                }}
                fullWidth
                variant={"contained"}
                type='submit'
            >
                Sign up
            </Button>

        </form>

    </div>
}

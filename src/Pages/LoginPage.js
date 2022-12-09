import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AiFillGithub} from "react-icons/ai";
import {Alert, Button, TextField} from "@mui/material";
import {BsArrowRight} from "react-icons/bs";
import {useUserAuth} from "../Common/UserAuthContext";

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const {logIn, googleSignIn} = useUserAuth();


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await logIn(email, password)
            navigate("/home")
        } catch (e) {
            setError(e.message)
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home")
        } catch (e) {
            setError(error.message)
        }
    }
    return <div className={"card"}>
        {error && <Alert severity="warning" sx={{
            position: "absolute",
            top: "40px"
        }}>{error}</Alert>}
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
                <Link to={"/signUp"}> Create Account</Link>
                <Link>Forgot password?</Link>

            </div>
            <Button
                type={"submit"}
                sx={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    backgroundColor: "var(--purple)",
                    textTransform: "none"
                }}
                fullWidth
                variant={"contained"}
            >
                Sign in
            </Button>

        </form>

        <Button
            sx={{
                marginBottom: "10px",
                marginTop: "10px",
                border: "1px solid black",
                color: "black",
                textTransform: "none",

            }}
            fullWidth
            variant={"outlined"}
            startIcon={<img
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"}
                width={15}
                alt={"google"}/>}
            endIcon={<BsArrowRight/>}

            onClick={handleGoogleSignIn}

        >
            Sign in with Google
        </Button>

        <Button
            sx={{
                marginBottom: "20px",
                color: "black",
                textTransform: "none",
                border: "1px solid black",

            }}
            fullWidth
            variant={"outlined"}
            startIcon={<AiFillGithub/>}
            endIcon={<BsArrowRight/>}
        >
            Sign in with Github
        </Button>

    </div>
}

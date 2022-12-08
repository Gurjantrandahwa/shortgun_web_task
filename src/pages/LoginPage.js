import {

    chakra,
    FormControl,
    useToast,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useAuth} from "../Common/AuthContext";
import useMounted from "../Common/useMounted";
import {useNavigate} from "react-router-dom"
import {AiFillGithub} from "react-icons/ai";
import {Button, TextField} from "@mui/material";
import {BsArrowRight} from "react-icons/bs";

export default function LoginPage() {
    const {signInWithGoogle, login} = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()
    const location = useLocation()
    const navigate = useNavigate();

    const mounted = useMounted()

    function handleRedirectToOrBack() {

        navigate.replace(location.state?.from ?? '/homepage')
    }

    return <div className={"card"}>
        <img src={"https://www.moonstride.com/wp-content/uploads/2020/11/spaceship-footer.svg"}
             className={"rocket-img"} alt={""}/>
        <h3>Welcome to Bardeen</h3>
        <p>Let's log in to launch your automations</p>
        <chakra.form
            onSubmit={async e => {
                e.preventDefault()
                if (!email || !password) {
                    toast({
                        description: 'Credentials not valid.',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })
                    return
                }

                setIsSubmitting(true)
                login(email, password)
                    .then(res => {
                        handleRedirectToOrBack()
                    })
                    .catch(error => {
                        console.log(error.message)
                        toast({
                            description: error.message,
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        })
                    })
                    .finally(() => {
                        mounted.current && setIsSubmitting(false)
                    })
            }}
        >

            <FormControl id='email'>

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
            </FormControl>
            <FormControl id='password'>

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
            </FormControl>
            <div className={"link-wrapper"}>
                <Link to={"/register"}> Create Account</Link>
                <Link to='/forgot-password'>Forgot password?</Link>

            </div>
            <Button
                sx={{marginBottom:"10px",
                    marginTop:"10px",
                    backgroundColor:"#7600D8",
                    textTransform:"none"
                }}
                fullWidth
                variant={"contained"}
                color={"secondary"}
                isLoading={isSubmitting}
            >
                Sign in
            </Button>

        </chakra.form>

        <Button
            sx={{
                marginBottom:"10px",
                marginTop:"10px",
                border:"1px solid black",
                color:"black",
                textTransform:"none",
                // justifyContent:"space-around"
            }}
            fullWidth
            variant={"outlined"}
            startIcon={<img
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"}
                width={15}
                alt={"google"}/>}
            endIcon={<BsArrowRight />}
            onClick={() =>
                signInWithGoogle()
                    .then(user => {
                        handleRedirectToOrBack()
                        console.log(user)
                    })
                    .catch(e => console.log(e.message))
            }
        >
            Sign in with Google
        </Button>

        <Button
            sx={{
                marginBottom:"20px",
                color:"black",
                textTransform:"none",
                border:"1px solid black",

            }}
            fullWidth
            variant={"outlined"}
            startIcon={<AiFillGithub/>}
            endIcon={<BsArrowRight />}
        >
            Sign in with Github
        </Button>

    </div>
}

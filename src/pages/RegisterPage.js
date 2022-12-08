import {

    Center,
    chakra,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useToast,
} from '@chakra-ui/react'
import React, {useEffect, useRef, useState} from 'react'
import {FaGoogle} from 'react-icons/fa'

import {useAuth} from "../Common/AuthContext";
import {Link} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import {AiFillGithub} from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs";

export default function RegisterPage() {

    const {signInWithGoogle, register} = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()
    const mounted = useRef(false)

    useEffect(() => {
        mounted.current = true
        return () => {
            mounted.current = false
        }
    }, [])

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
                // your register logic here
                setIsSubmitting(true)
                register(email, password)
                    .then(res => {
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
                <Link to={"/register"}>   Login</Link>
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
                    type='submit'

                    isLoading={isSubmitting}
                >
                    Sign up
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
                    .then(user => console.log(user))
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

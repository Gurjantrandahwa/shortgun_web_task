import {


    chakra,
    FormControl,

    useToast,
} from '@chakra-ui/react'
import React, {useState} from 'react'

import {useAuth} from "../Common/AuthContext";

import {Link} from "react-router-dom"
import {Button, TextField} from "@mui/material";

export default function ForgotPasswordPage() {

    const {forgotPassword} = useAuth()
    const toast = useToast()

    const [email, setEmail] = useState('')

    return <div className={"card"}>

        <img src={"https://www.moonstride.com/wp-content/uploads/2020/11/spaceship-footer.svg"}
             className={"rocket-img"} alt={""}/>
        <h3>Welcome to Bardeen</h3>
        <p>Let's log in to launch your automations</p>
        <chakra.form
            onSubmit={async e => {
                e.preventDefault()
                // your login logic here
                try {
                    await forgotPassword(email)
                    toast({
                        description: `An email is sent to ${email} for password reset instructions.`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                } catch (error) {
                    console.log(error.message)
                    toast({
                        description: error.message,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })
                }
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

            <Button
                sx={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    backgroundColor: "#7600D8",
                    textTransform: "none"
                }}
                fullWidth
                variant={"contained"}
                type='submit'>
                Submit
            </Button>

        </chakra.form>


        <Link to={"/"}>
            <p style={{
                color:"#7600D8",
                border:"1px solid #7600D8",
                padding:"10px 125px",
                marginTop:"10px",
                borderRadius:"6px"
            }}>Login
            </p>

        </Link>


    </div>
}

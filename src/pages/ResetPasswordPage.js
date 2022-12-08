import {

    chakra,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useToast,
} from '@chakra-ui/react'
import React, {useState} from 'react'

import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useAuth} from "../Common/AuthContext";
import {Button, TextField} from "@mui/material";
function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function ResetPasswordPage() {
    const {resetPassword} = useAuth()
    const query = useQuery()
    const navigate = useNavigate();
    const [password, setPassword] = useState('')
    const toast = useToast()

    console.log(query.get('mode'), query.get('oobCode'))
    return <div className={"card"}>

        <img src={"https://www.moonstride.com/wp-content/uploads/2020/11/spaceship-footer.svg"}
             className={"rocket-img"} alt={""}/>
        <h3>Welcome to Bardeen</h3>
        <p>Let's log in to launch your automations</p>
                <chakra.form
                    onSubmit={async e => {
                        e.preventDefault()
                        try {
                            await resetPassword(query.get('oobCode'), password)
                            toast({
                                description: 'Password has been changed, you can login now.',
                                status: 'success',
                                duration: 9000,
                                isClosable: true,
                            })
                            navigate.push('/login')
                        } catch (error) {
                            toast({
                                description: error.message,
                                status: 'error',
                                duration: 9000,
                                isClosable: true,
                            })
                            console.log(error.message)
                        }
                    }}
                >

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

                        <Link to={"/"}>
                            <p style={{
                                color:"#7600D8",
                                border:"1px solid #7600D8",
                                padding:"10px 90px",
                                marginTop:"15px",
                                borderRadius:"6px"
                            }}>
                                Reset password
                            </p>

                        </Link>


                </chakra.form>


    </div>
}

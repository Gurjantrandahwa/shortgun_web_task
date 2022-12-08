import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
} from '@chakra-ui/react'
import React, {useState} from 'react'

import {useLocation, useNavigate} from 'react-router-dom'
import {useAuth} from "../Common/AuthContext";

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
                    <Stack spacing='6'>
                        <FormControl id='password'>
                            <FormLabel>New password</FormLabel>
                            <Input
                                type='password'
                                autoComplete='password'
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Button type='submit' colorScheme='pink' size='lg' fontSize='md'>
                            Reset password
                        </Button>
                    </Stack>
                </chakra.form>


    </div>
}

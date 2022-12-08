import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,

  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'

import {useAuth} from "../Common/AuthContext";

import {useNavigate} from "react-router-dom"

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const { forgotPassword } = useAuth()
  const toast = useToast()

  const [email, setEmail] = useState('')

  return<div className={"card"}>

    <img src={"https://www.moonstride.com/wp-content/uploads/2020/11/spaceship-footer.svg"}
         className={"rocket-img"} alt={""}/>
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
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <Button type='submit' colorScheme='pink' size='lg' fontSize='md'>
              Submit
            </Button>
          </Stack>
        </chakra.form>

        <Center>
          <Button variant='link' onClick={() => navigate.push('/login')}>
            Login
          </Button>
        </Center>


  </div>
}

import {
    Button,
    chakra,
    FormControl,
    FormLabel,

    HStack,
    Input,

    useToast,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import {FaGoogle} from 'react-icons/fa'
import {Link, useLocation} from 'react-router-dom'
import {useAuth} from "../Common/AuthContext";
import useMounted from "../Common/useMounted";
import {useNavigate} from "react-router-dom"

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
            <FormControl id='password'>
                <FormLabel>Password</FormLabel>
                <Input
                    name='password'
                    type='password'
                    autoComplete='password'
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
            </FormControl>
            {/* <PasswordField /> */}
            <Button

                isLoading={isSubmitting}
            >
                Sign in
            </Button>

        </chakra.form>
        <HStack justifyContent='space-between'>
            <Link to={"/register"}> Create Account</Link>
            <Link to='/forgot-password'>Forgot password?</Link>

        </HStack>

        <Button

            leftIcon={<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"}
            width={15}/>}
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

            leftIcon={<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"}
                           width={15}
            alt={"google"}/>}

        >
            Sign in with Github
        </Button>

    </div>
}

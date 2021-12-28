import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import useFirebase from '../../firebase/useFirebase';
import google from '../../images/google.png'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { googleSignIn, emailSignIn, error } = useFirebase()
    const navigate = useNavigate()
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const success = () => {
        Swal.fire(
            'Good job!',
            'You are successfully logged in!',
            'success'
        )
    }
    const fail = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `password didn't matched!`,
        })
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        emailSignIn(email, password, success, navigate, fail)

    }
    console.log(error)
    return (
        <Box className='main-login'>
            <Box className='login-form'>
                <Typography variant='h6'>
                    Please Sign in
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        name='email'
                        type='email'
                        onBlur={handleEmail}
                        variant="standard"
                        sx={{ width: '75%' }}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        name='password'
                        type='password'
                        onBlur={handlePassword}
                        variant="standard"
                        sx={{ width: '75%' }}
                    />
                    <input className='submit'
                        type='submit'
                        style={{ width: '50%', marginY: '5px' }}
                        value='Sign in' />
                </form>
                <Typography sx={{ width: '25px', height: '25px', backgroundColor: 'tomato', borderRadius: '50%', textAlign: 'center', margin: '5px auto', color: 'white' }}>
                    or
                </Typography>
                <button onClick={() => googleSignIn(success, navigate)} className="google-button"><img style={{ width: '25px' }} src={google} alt="" /> <span>Google sign in </span> </button>
                <Typography sx={{ marginTop: '5px' }}>
                    Don't have an account?<Link style={{ textDecoration: "none", display: 'inline-block' }} to='/register'>Register </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;
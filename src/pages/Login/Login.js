import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import google from '../../images/google.png'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    return (
        <Box className='main-login'>
            <Box className='login-form'>
                <Typography variant='h6'>
                    Please Sign in
                </Typography>
                <form>
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
                <button className="google-button"><img style={{ width: '25px' }} src={google} alt="" /> <span>Google sign in </span> </button>
            </Box>
        </Box>
    );
};

export default Login;
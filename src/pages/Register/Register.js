import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useFirebase from '../../firebase/useFirebase';
import { useNavigate } from 'react-router';

const Register = () => {
    const [info, setInfo] = useState({})
    const { createUser } = useFirebase()
    const navigate=useNavigate()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const userInfo = { ...info }
        userInfo[field] = value;
        setInfo(userInfo)
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        if (info.password !== info.password2) {
            fail()
            return
        }
        createUser(info.email,info.password,info.name,success,navigate)
    }
    const fail = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `password didn't matched!`,
        })
    }
    const success = () => {
        Swal.fire(
            'Good job!',
            'You are successfully logged in!',
            'success'
        )
    }
    return (
        <Box className='main-login'>
            <Box className='login-form'>
                <Typography variant='h6'>
                    Please Sign up
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Name"
                        name='name'
                        type='text'
                        onBlur={handleOnBlur}
                        variant="standard"
                        sx={{ width: '75%' }}
                    />
                    <TextField
                        id="standard-basic"
                        label="Email"
                        name='email'
                        type='email'
                        onBlur={handleOnBlur}
                        variant="standard"
                        sx={{ width: '75%' }}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        name='password'
                        type='password'
                        onBlur={handleOnBlur}
                        variant="standard"
                        sx={{ width: '75%' }}
                    />
                    <TextField
                        id="standard-basic"
                        label="Confirm password"
                        name='password2'
                        type='password'
                        onBlur={handleOnBlur}
                        variant="standard"
                        sx={{ width: '75%' }}
                    />
                    <input className='submit'
                        type='submit'
                        style={{ width: '50%', marginY: '5px' }}
                        value='Register' />
                </form>
                <Typography sx={{ marginTop: '5px' }}>
                    All ready have an account?<Link style={{ textDecoration: "none", display: 'inline-block' }} to='/login'>Sign in</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Register;
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/download.png'

const data2 = [
    {
        q: 'জিনদের কাছে কোন কিছু জিজ্ঞেস করা বা তাদের সাহায্য নেয়া যাবে কি?',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'view'
    },
    {
        q: 'যদি কোনো কারণবশত ফজরের ২ রাকাআত সুন্নত, ২ রাকাআত  ফরজের পর এবং যোহরের ৪ রাকাআত সুন্নত, ৪ রাকাআত  ফরজের পর আদায় করি তাহলে কি হবে?',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'view'
    },
    {
        q: ' পুরুষের চুল কাটার সুন্নত তরিকা কয়টি এবং কি কি?',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'view'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'view'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'view'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'view'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'new'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'new'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'new'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'new'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'new'
    },
    {
        q: 'osjdflsjflfdsfjsl',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'new'
    }
]
const Books = () => {
    return (
        <Box sx={{ marginTop: '40px' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box className='two'>
                            <Typography variant='h6' className='paragraph'>
                                কিতাব সমূহ
                            </Typography>
                            {data2.slice(0, 3).map(data => <Box>
                                <Box className='questions'>
                                    <Box className='question-box'>
                                        <Link to='/'><img style={{ width: "100%", height: '100%' }} src={img} alt="" /></Link>
                                    </Box>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography>
                                            {data.q}
                                        </Typography>
                                        <Link className='question-link' to={`/selected/`}><i class="fas fa-angle-right"></i> বিস্তারিত </Link>
                                    </Box>
                                </Box>
                            </Box>)}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='two'>
                            <Typography variant='h6' className='paragraph'>
                                নামাজের সময়সূচী
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='two'>
                            <Typography variant='h6' className='paragraph'>
                                প্রবন্ধ সমূহ
                            </Typography>
                            {data2.slice(0, 3).map(data => <Box>
                                <Box className='questions'>
                                    <Box className='question-box'>
                                        <Link to='/'><img style={{ width: "100%", height: '100%' }} src={img} alt="" /></Link>
                                    </Box>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography>
                                            {data.q}
                                        </Typography>
                                        <Link className='question-link' to={`/selected/`}><i class="fas fa-angle-right"></i> বিস্তারিত </Link>
                                    </Box>
                                </Box>
                            </Box>)}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Books;
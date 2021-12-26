import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/download.png'

const data1 = [
    {
        q: ' পুরুষের চুল কাটার সুন্নত তরিকা কয়টি এবং কি কি?',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'new'
    },
    {
        q: 'নির্ধারিত সময়ের আগে কি যাকাত আদায় করা যাবে?',
        a: 'lsjflsdjflsjfdlksjflk',
        d: '5 oct 2021',
        s: 'new'
    },
    {
        q: 'বিতর নামাজে দুয়ায়ে কুনুত না পড়লে কি গুনাহ হবে?',
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
const TwoSection = () => {
    return (
        <Box sx={{ marginTop: "30px" }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box className=' two'>
                            <Typography variant='h3' className='paragraph'>
                                নির্বাচিত প্রবন্ধ
                            </Typography>
                            {data1.slice(0, 3).map(data => <Box>
                                <Box className='questions'>
                                    <Box className='question-box'>
                                        <Link to='/'><img style={{ width: "100%", height: '100%' }} src={img} alt="" /></Link>
                                    </Box>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Link className='question-link' to={`/selected/`}>{data.q} </Link>
                                        <Typography>
                                            প্রকার
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>)}
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className='two'>
                        <Typography variant='h3' className='paragraph'>
                            নির্বাচিত প্রবন্ধ
                        </Typography>
                            {data1.slice(0, 3).map(data => <Box>
                                <Box className='questions'>
                                    <Box className='question-box'>
                                        <Link to='/'><img style={{ width: "100%", height: '100%' }} src={img} alt="" /></Link>
                                    </Box>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Link className='question-link' to={`/selected/`}>{data.q} </Link>
                                        <Typography>
                                            প্রকার
                                        </Typography>
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

export default TwoSection;
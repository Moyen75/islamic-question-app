import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/top-foote2.png'
import img2 from '../../../images/top-footer.png'

const Footer = () => {
    return (
        <Box sx={{ marginY: '30px' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box className='top-footer-one'>
                                <Box sx={{ maxHeight: '200px', overflow: 'hidden' }}>
                                    <img style={{ width: '100%', minHeight: '200px' }} src={img1} alt="" />
                                </Box>
                                <Box className='top-footer-two'>
                                    <Typography variant='h4' sx={{ marginBottom: '16px' }}>
                                        মাসনুন দোআ ও অজিফাসমূহ
                                    </Typography>
                                    <Link to='/' className='footer-link'>
                                        এখানে ক্লিক করুন
                                    </Link>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box className='top-footer-one'>
                                <Box sx={{ maxHeight: '200px', overflow: 'hidden' }}>
                                    <img style={{ width: '100%', minHeight: '200px' }} src={img2} alt="" />
                                </Box>
                                <Box className='top-footer-two'>
                                    <Typography variant='h4' sx={{ marginBottom: '16px' }}>
                                        মাসনুন দোআ ও অজিফাসমূহ
                                    </Typography>
                                    <Link to='/' className='footer-link'>
                                        এখানে ক্লিক করুন
                                    </Link>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box className='main-footer'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ color: 'white' }}>
                            ইসলামিক প্রশ্ন উত্তর
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ color: 'white' }}>
                            ইসলামিক প্রশ্ন উত্তর
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ color: 'white' }}>
                            ইসলামিক প্রশ্ন উত্তর
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ color: 'white' }}>
                            ইসলামিক প্রশ্ন উত্তর
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;
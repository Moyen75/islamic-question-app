import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import book from '../../../images/is-book.png'
import books from '../../../images/is-books.png'
import contact from '../../../images/contact.png'
import bani from '../../../images/bani.png'
import banies from '../../../images/is-banies.png'
import design from '../../../images/is-design.png'

const SixPack = () => {
    return (
        <Box sx={{marginTop:'80px'}}>
            <Container sx={{ marginTop: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box className='main-pack' onClick={()=>console.log('box clicked')}>
                            <Box>
                                <img src={book} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', paddingRight: '15px' }}>
                                <Typography>
                                    দারুল ইফতা
                                </Typography>
                                <Typography>
                                    আপনার জিজ্ঞাসা ও সমাধান
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='main-pack' onClick={()=>console.log('box clicked')}>
                            <Box>
                                <img style={{marginLeft:'15px'}} src={design} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', paddingRight: '15px' }}>
                                <Typography>
                                    দারুল ইফতা
                                </Typography>
                                <Typography>
                                    আপনার জিজ্ঞাসা ও সমাধান
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='main-pack' onClick={()=>console.log('box clicked')}>
                            <Box>
                                <img src={bani} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', paddingRight: '15px' }}>
                                <Typography>
                                    দারুল ইফতা
                                </Typography>
                                <Typography>
                                    আপনার জিজ্ঞাসা ও সমাধান
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='main-pack' onClick={()=>console.log('box clicked')}>
                            <Box>
                                <img style={{marginLeft:'15px'}} src={contact} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', paddingRight: '15px' }}>
                                <Typography>
                                    দারুল ইফতা
                                </Typography>
                                <Typography>
                                    আপনার জিজ্ঞাসা ও সমাধান
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='main-pack' onClick={()=>console.log('box clicked')}>
                            <Box>
                                <img src={books} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', paddingRight: '15px' }}>
                                <Typography>
                                    দারুল ইফতা
                                </Typography>
                                <Typography>
                                    আপনার জিজ্ঞাসা ও সমাধান
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className='main-pack' onClick={()=>console.log('box clicked')}>
                            <Box>
                                <img src={banies} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', paddingRight: '15px' }}>
                                <Typography>
                                    দারুল ইফতা
                                </Typography>
                                <Typography>
                                    আপনার জিজ্ঞাসা ও সমাধান
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SixPack;
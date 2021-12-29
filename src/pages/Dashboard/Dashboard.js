import { Grid} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../Home/TopNavbar/TopNavbar';
import Questions from '../Questions/Questions';

const Dashboard = () => {
    return (
        <Box >
            <TopNavbar></TopNavbar>
            <Box sx={{ paddingX: { xs: '0', md: '140px' }, marginTop: '80px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ border: { xs: '0', md: '10px solid black' } }}>
                            {/* <Questions/> */}
                        <Outlet />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <form action="">
                                <input type="search" placeholder='খুজুন' name="" id="" />
                                <button type='submit'>খুঁজুন</button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
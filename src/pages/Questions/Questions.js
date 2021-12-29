import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useQuestions from '../../hooks/useQuestions';
import TopNavbar from '../Home/TopNavbar/TopNavbar';

const Questions = () => {
    const questions = useQuestions()
    return (
        <Box>
            <TopNavbar></TopNavbar>
            <Container>
                <Grid container spacing={2}>
                    {questions?.map(q => <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: "justify",marginY:'20px' }}>
                            <Typography>
                                প্রশ্নঃ  {q?.q}
                            </Typography>
                            <Typography sx={{ marginTop: '30px' }}>
                                উত্তরঃ {q?.a}
                            </Typography>
                        </Box>
                        <hr />
                    </Grid>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Questions;
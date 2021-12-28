import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useQuestions from '../../hooks/useQuestions';

const Questions = () => {
    const questions = useQuestions()
    return (
        <Container>
            <Grid container spacing={2}>
                {questions?.map(q => <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: "left" }}>
                        <Typography>
                            প্রশ্নঃ  {q?.q}
                        </Typography>
                        <Typography sx={{ marginTop: '30px' }}>
                            উত্তরঃ {q?.a}
                        </Typography>
                    </Box>
                </Grid>)}
            </Grid>
        </Container>
    );
};

export default Questions;
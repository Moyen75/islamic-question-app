import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useQuestions from '../../hooks/useQuestions';

const Akidah = () => {
    const [matched,setMatched]=useState([])
    const questions=useQuestions()
    useEffect(()=>{
          const getMatched=questions?.filter(question=>question.category ==='আকিদা')
          setMatched(getMatched)
    },[questions])
    return (
        <div>
            {
                matched?.map(match=> <Box sx={{ textAlign: "justify",marginY:'20px',padding:'10px' }}>
                <Typography>
                    প্রশ্নঃ  {match?.q}
                </Typography>
                <Typography sx={{ marginTop: '30px' }}>
                    উত্তরঃ {match?.a}
                </Typography>
            </Box>)
            }
        </div>
    );
};

export default Akidah;
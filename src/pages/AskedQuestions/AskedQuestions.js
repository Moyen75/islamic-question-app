import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useQuestions from '../../hooks/useQuestions';

const AskedQuestions = () => {
    const questions = useQuestions()
    const [matched, setMatched] = useState([])
    const [answerForm,setAnswerForm]=useState(false)
    

    const handleClick=()=>{
        setAnswerForm(true)
    }

    useEffect(() => {
        const checkMatch = questions?.filter(q => q.a === undefined)
        setMatched(checkMatch)
    }, [questions])
    // console.log(matched)
    return (
        <div>
            <Grid container spacing={2}>
                {matched?.map(q => <Grid item xs={12} md={12}>
                    {q?.a ? <Box >
                        <Typography>
                            সকল প্রশ্নের উত্তর দেওয়া হয়েছে আলহামদুলিল্লাহ!
                        </Typography>
                    </Box> : <Box sx={{ textAlign: "justify", marginY: '20px',padding:"10px" }}>
                        <Typography>
                            প্রশ্নঃ  {q?.q}
                        </Typography>
                        <button onClick={handleClick}>উত্তর দিন</button>
                    </Box>}
                    <hr />
                </Grid>)}
            </Grid>
        </div>
    );
};

export default AskedQuestions;
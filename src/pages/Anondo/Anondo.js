import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../context/AuthProvider/useAuth';

const Anondo = () => {
    const [matched, setMatched] = useState([])
    const {questions} = useAuth()
    useEffect(() => {
        const getMatched = questions?.filter(question => question.category === 'বিনোদন')
        setMatched(getMatched)
    }, [questions])
    return (
        <div>
            {
                matched && <Box>
                    {matched ? <Box>
                        {
                            matched?.map(match => <Box sx={{ textAlign: "justify", marginY: '20px', padding: '10px' }}>
                                <Typography>
                                    প্রশ্নঃ  {match?.q}
                                </Typography>
                                <Typography sx={{ marginTop: '30px' }}>
                                    উত্তরঃ {match?.a}
                                </Typography>
                            </Box>)
                        }
                    </Box> : <Box>
                        <Typography variant='h5'>
                            দুঃখিতঃ কোন তথ্য পাওয়া যায়নি ।
                        </Typography>
                        <Typography variant='h5'>
                            অনুগ্রহকরে অপেক্ষা করুন।
                        </Typography>
                    </Box>}
                </Box>
            }
        </div>
    );
};

export default Anondo;
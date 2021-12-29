import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useFirebase from '../../firebase/useFirebase';

const AskQuestion = () => {
    const { user } = useFirebase()
    const [question, setQuestion] = useState({})
    const navigate = useNavigate()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value;
        const newQuestion = { ...question }
        newQuestion[field] = value;
        setQuestion(newQuestion)
    }
    console.log(question)
    const handleOnSubmit = e => {
        e.preventDefault()
        const questions = { q: question.q, subject: question.subject, email: user?.email, name: user?.displayName }
        fetch('http://localhost:5000/question', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(questions)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'ধন্যবাদ!',
                        'অল্প সময়ের মধ্যেই আপনার উত্তর পেয়ে যাবেন ইনশাআল্লাহ!',
                        'success'
                    )
                    navigate('/dashboard/questions')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    id="standard-basic"
                    label="প্রশ্নের বিষয় লিখুন"
                    name='subject'
                    sx={{ width: '75%' }}
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="আপনার প্রশ্নটি লিখুন"
                    name='q'
                    sx={{ width: '75%' }}
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    type='submit'
                    value='submit'
                    sx={{ width: '75%' }}
                    onBlur={handleOnBlur}
                    variant="standard"
                />
            </form>
        </div>
    );
};

export default AskQuestion;
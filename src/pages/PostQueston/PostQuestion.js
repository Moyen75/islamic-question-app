import { TextField } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Swal from 'sweetalert2';

const currencies = [
    {
        value: 'পবিত্রতা',
        label: 'অজু/গোসল/পবিত্রতা/হায়েজ/নেফাস',
    },
    {
        value: 'গোনাহ',
        label: 'অপরাধ ও গোনাহ ',
    },
    {
        value: 'আকিদা',
        label: 'আকিদা-বিশ্বাস ',
    },
    {
        value: 'আখেরাত',
        label: 'আখেরাত',
    },
];
const PostQuestion = () => {
    const [currency, setCurrency] = React.useState('আকিদা');
    const [questions, setQuestions] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newQuestion = { ...questions }
        newQuestion[field] = value;
        setQuestions(newQuestion)
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        fetch('https://shielded-reaches-48639.herokuapp.com/questions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(questions)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    success()
                    setQuestions('')
                }
            })
    }
    const success = () => {
        Swal.fire(
            'Good job!',
            'Successfully posted!',
            'success'
        )
    }
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    id="standard-basic"
                    label="প্রশ্ন"
                    variant="standard"
                    name='q'
                    multiline
                    maxRows={100}
                    onBlur={handleOnBlur}
                    sx={{ width: '75%' }}
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    name='category'
                    onBlur={handleOnBlur}
                    value={currency}
                    onChange={handleChange}
                    sx={{ width: '75%' }}
                    helperText="Please select category"
                    variant="standard"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-basic"
                    label="উত্তর"
                    variant="standard"
                    name='a'
                    multiline
                    maxRows={100}
                    onBlur={handleOnBlur}
                    sx={{ width: '75%' }}
                />
                <TextField
                    id="standard-basic"
                    value='submit'
                    type='submit'
                    variant="standard"
                    sx={{ width: '30%' }}
                />
            </form>
        </div>
    );
};

export default PostQuestion;
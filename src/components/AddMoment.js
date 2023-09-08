import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import colors from "./colors";
import {createMoment} from "../api";
import { useNavigate } from 'react-router-dom';

const AddMoment = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSend = () => {
        createMoment(text)
            .then(response => {
                setText(''); // Clear the text area
                navigate('/moments'); // Redirect to /moments
            })
            .catch(error => {
                // Handle the error here...
            });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, marginTop: 4 }}>
            <TextField
                multiline
                rows={4}
                variant="outlined"
                placeholder="Add your moment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{ width: '75%' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSend}
                sx={{
                    backgroundColor: colors.primary,
                    '&:hover': {
                        backgroundColor: colors.darkPurple, // replace with your hover color
                    }
                }}
            >
                Send
            </Button>
        </Box>
    );
};

export default AddMoment;
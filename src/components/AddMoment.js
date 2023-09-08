import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import colors from "./colors";
import {createMoment} from "../api";

const AddMoment = () => {
    const [text, setText] = useState('');

    const handleSend = () => {
        createMoment(text)
            .then(response => {
                // Handle the response here...
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
                        backgroundColor: colors.primary, // replace with your hover color
                    }
                }}
            >
                Send
            </Button>
        </Box>
    );
};

export default AddMoment;
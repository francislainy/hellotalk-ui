import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useAddMoment} from "../../../hooks/useAddMoment";
import './AddMoment.css'; // Import your CSS file here

const AddMoment = () => {
    const {
        text,
        setText,
        handleSend,
    } = useAddMoment();

    return (
        <Box className="add-moment">
            <TextField
                multiline
                rows={4}
                variant="outlined"
                placeholder="Add your moment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="text-field"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSend}
                className="button"
            >
                Send
            </Button>
        </Box>
    );
};

export default AddMoment;

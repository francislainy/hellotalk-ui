import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import colors from "../../../colors/colors";
import {useAddMoment} from "../../hooks/useAddMoment";

const AddMoment = () => {
    const {
        text,
        setText,
        handleSend,
    } = useAddMoment();

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, marginTop: 4}}>
            <TextField
                multiline
                rows={4}
                variant="outlined"
                placeholder="Add your moment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{width: '75%'}}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSend}
                sx={{
                    backgroundColor: colors.primary,
                    '&:hover': {
                        backgroundColor: colors.darkPurple,
                    }
                }}
            >
                Send
            </Button>
        </Box>
    );
};

export default AddMoment;
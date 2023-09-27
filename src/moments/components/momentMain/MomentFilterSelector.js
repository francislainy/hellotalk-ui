import React from 'react';
import {Box, Button} from "@mui/material";
import colors from '../../../colors/colors';

const buttons = ['Recent', 'Best', 'Learn', 'Nearby', 'Following', 'Help', 'Classmates', 'Voice']

// Define your mapping here
const buttonToParamMap = {
    'Recent': '',
    'Best': 'best_param',
    'Learn': 'best_param',
    'Nearby': 'best_param',
    'Following': 'best_param',
    'Help': 'best_param',
    'Classmates': 'best_param',
    'Voice': 'best_param',
};

const MomentFilterSelector = ({fetchMoments}) => (
    <Box sx={{'& > :not(style)': {m: 1}, display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {buttons.map((button) => (
            <Button
                key={button}
                variant="contained"
                sx={{color: colors.white, backgroundColor: colors.primary}}
                onClick={() => fetchMoments(buttonToParamMap[button])}
                TouchRippleProps={{style: {color: '#7B1FA2'}}}
            >
                {button}
            </Button>
        ))}
    </Box>
);

export default MomentFilterSelector;
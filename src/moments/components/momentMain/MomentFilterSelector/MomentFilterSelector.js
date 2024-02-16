import React, {useContext} from 'react';
import {Box, Button} from "@mui/material";
import colors from '../../../colors/colors';
import MomentContext from "../../contexts/MomentContext";

const BUTTONS = [
    { name: 'Recent', param: '' },
    { name: 'Best', param: 'best_param' },
    { name: 'Learn', param: 'best_param' },
    { name: 'Nearby', param: 'best_param' },
    { name: 'Following', param: 'best_param' },
    { name: 'Help', param: 'best_param' },
    { name: 'Classmates', param: 'best_param' },
    { name: 'Voice', param: 'best_param' },
];

const MomentFilterSelector = () => {
    const {fetchMoments} = useContext(MomentContext);

    return (
        <Box sx={{'& > :not(style)': {m: 1}, display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            {BUTTONS.map((button) => (
                <Button
                    key={button.name}
                    variant="contained"
                    sx={{color: colors.white, backgroundColor: colors.primary}}
                    onClick={() => fetchMoments(button.param)}
                    TouchRippleProps={{style: {color: '#7B1FA2'}}}
                >
                    {button.name}
                </Button>
            ))}
        </Box>
    )
};

export default MomentFilterSelector;

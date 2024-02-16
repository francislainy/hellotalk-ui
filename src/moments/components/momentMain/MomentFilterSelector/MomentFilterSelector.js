import React, {useContext} from 'react';
import {Box, Button} from "@mui/material";
import MomentContext from "../../../contexts/MomentContext";
import './MomentFilterSelector.css';

const BUTTONS = [
    {name: 'Recent', param: ''},
    {name: 'Best', param: 'best_param'},
    {name: 'Learn', param: 'best_param'},
    {name: 'Nearby', param: 'best_param'},
    {name: 'Following', param: 'best_param'},
    {name: 'Help', param: 'best_param'},
    {name: 'Classmates', param: 'best_param'},
    {name: 'Voice', param: 'best_param'},
];

const MomentFilterSelector = () => {
    const {fetchMoments} = useContext(MomentContext);

    return (
        <Box className="moment-filter-selector">
            {BUTTONS.map((button) => (
                <Button
                    key={button.name}
                    variant="contained"
                    className="moment-filter-button"
                    onClick={() => fetchMoments(button.param)}
                >
                    {button.name}
                </Button>
            ))}
        </Box>
    );
};

export default MomentFilterSelector;


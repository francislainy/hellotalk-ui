import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import './Moments.css';

import Recent from './Recent';
import Best from './Best';
import Learn from './Learn';
import Nearby from './Nearby';
import Following from './Following';
import Help from './Help';
import Classmates from './Classmates';
import Voice from './Voice';

const componentMap = {
    Recent: Recent,
    Best: Best,
    Learn: Learn,
    Nearby: Nearby,
    Following: Following,
    Help: Help,
    Classmates: Classmates,
    Voice: Voice,
};

const buttons = ['Recent', 'Best', 'Learn', 'Nearby', 'Following', 'Help', 'Classmates', 'Voice']

const Moments = () => {
    const [currentComponent, setCurrentComponent] = useState('Recent');

    return (
        <Box sx={{display: 'grid', justifyContent: 'center', marginTop: '20px'}}>
            <Box sx={{'& > :not(style)': {m: 1}, display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {buttons.map((button) => (
                    <Button
                        key={button}
                        variant="contained"
                        className="buttonStyle"
                        onClick={() => setCurrentComponent(button)}
                    >
                        {button}
                    </Button>
                ))}
            </Box>
            <Box sx={{maxWidth: 'fit-content', width: '100%', alignSelf: 'start'}}>
                {currentComponent && React.createElement(componentMap[currentComponent])}
            </Box>
        </Box>
    );
}
export default Moments;
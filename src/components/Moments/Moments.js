import React, {useState} from 'react';
import {Box, Button, List} from "@mui/material";
import './Moments.css';
import colors from '../colors';

import Recent from './Recent';
import Best from './Best';
import Learn from './Learn';
import Nearby from './Nearby';
import Following from './Following';
import Help from './Help';
import Classmates from './Classmates';
import Voice from './Voice';
import MomentItem from "./MomentItem";

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

    const moments = [
        {
            user: {
                name: 'User 1',
                avatar: 'url_to_avatar_image',
            },
            content: 'This is a moment from user 1',
            id: '1',
        },
        {
            user: {
                name: 'User 2',
                avatar: 'url_to_avatar_image',
            },
            content: 'This is another moment from user 2',
            id: '2'
        },
        // Add more moments here...
    ];

    return (
        <Box sx={{display: 'grid', justifyContent: 'center', marginTop: '20px'}}>
            <Box sx={{'& > :not(style)': {m: 1}, display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {buttons.map((button) => (
                    <Button
                        key={button}
                        variant="contained"
                        sx={{color: colors.white, backgroundColor: colors.primary}}
                        onClick={() => setCurrentComponent(button)}
                        TouchRippleProps={{ style: { color: '#7B1FA2' } }}
                    >
                        {button}
                    </Button>
                ))}
            </Box>
            <Box sx={{maxWidth: 'fit-content', width: '100%', alignSelf: 'start'}}>
                {currentComponent && React.createElement(componentMap[currentComponent])}
            </Box>
            <Box>
                <List>
                    {moments.map((moment, index) => (
                        <MomentItem key={index} moment={moment} index={moment.id} />
                    ))}
                </List>
            </Box>
        </Box>

    );
}
export default Moments;
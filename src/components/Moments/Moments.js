import React, { useEffect, useState } from 'react';
import { Box, Button, Fab, List } from "@mui/material";
import './Moments.css';
import colors from '../colors';
import AddIcon from '@mui/icons-material/Add';

import Recent from './Recent';
import Best from './Best';
import Learn from './Learn';
import Nearby from './Nearby';
import Following from './Following';
import Help from './Help';
import Classmates from './Classmates';
import Voice from './Voice';
import MomentItem from "./MomentItem";
import { useNavigate } from "react-router-dom";
import { getMoments } from "../../api/api";

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
    const [moments, setMoments] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        const fetchMoments = async () => {
            try {
                const response = await getMoments();
                setMoments(response.data);
            } catch (error) {
                alert(error)
            }
        };

        fetchMoments();
    }, []);

    return (
        <Box sx={{ display: 'grid', justifyContent: 'center', marginTop: '20px' }}>
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {buttons.map((button) => (
                    <Button
                        key={button}
                        variant="contained"
                        sx={{ color: colors.white, backgroundColor: colors.primary }}
                        onClick={() => setCurrentComponent(button)}
                        TouchRippleProps={{ style: { color: '#7B1FA2' } }}
                    >
                        {button}
                    </Button>
                ))}
            </Box>
            <Box sx={{ maxWidth: 'fit-content', width: '100%', alignSelf: 'start' }}>
                {currentComponent && React.createElement(componentMap[currentComponent])}
            </Box>
            <Box>
                <List>
                    {moments.map((moment, index) => (
                        <MomentItem key={index} moment={moment} index={moment.id} />
                    ))}
                </List>
            </Box>
            <Fab
                aria-label="add"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    backgroundColor: colors.primary,
                    '&:hover': {
                        backgroundColor: colors.darkPurple, // replace with your hover color
                    }
                }}
                onClick={() => navigate('/moments/add')}
            >
                <AddIcon />
            </Fab>
        </Box>

    );
}
export default Moments;
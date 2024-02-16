import React, {useContext} from 'react';
import {Box, List} from '@mui/material';
import MomentItem from "../MomentItem";
import MomentContext from "../../../contexts/MomentContext"; // Import your CSS file here
import './MomentList.css';

const MomentList = () => {
    const {moments} = useContext(MomentContext);

    return (
        <Box className="moment-list">
            <List className="list">
                {moments?.map((moment, index) => (
                    <MomentItem key={index} moment={moment} index={moment.id}/>
                ))}
            </List>
        </Box>
    );
}

export default MomentList;

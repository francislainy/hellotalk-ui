import React from 'react';
import {Box} from "@mui/material";

import useMoments from '../hooks/useMoments';
import MomentList from "./MomentList";

const Moments = () => {
    const {moments} = useMoments('');

    return (
        <Box sx={{width: '100%', alignSelf: 'start'}}>
            <MomentList moments={moments} style={{width: '100%'}}/>
        </Box>
    );
}
export default Moments;
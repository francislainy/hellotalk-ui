import React from 'react';
import {Box} from "@mui/material";

import useMoments from '../hooks/useMoments';
import MomentFilterSelector from "../components/momentMain/MomentFilterSelector";
import MomentList from "../components/momentMain/MomentList";
import FabAddMoment from "../components/momentMain/FabAddMoment";

const Moments = () => {
    const { moments, fetchMoments } = useMoments('');

    return (
        <Box sx={{display: 'grid', justifyContent: 'center', marginTop: '20px'}}>
            <MomentFilterSelector fetchMoments={fetchMoments}/>
            <Box sx={{width: '100%', alignSelf: 'start'}}>
                <MomentList moments={moments} style={{width: '100%'}}/>
            </Box>
            <FabAddMoment/>
        </Box>
    );
}
export default Moments;

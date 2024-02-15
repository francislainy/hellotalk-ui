import React from 'react';
import {Box} from "@mui/material";

import useMoments from '../hooks/useMoments';
import MomentFilterSelector from "../components/momentMain/MomentFilterSelector";
import MomentList from "../components/momentMain/MomentList";
import FabAddMoment from "../components/momentMain/FabAddMoment";
import MomentProvider from "../provider/MomentProvider";

const MomentScreen = () => {
    const {fetchMoments} = useMoments('');

    return (
        <MomentProvider>
            <Box sx={{display: 'grid', justifyContent: 'center', marginTop: '20px'}}>
                <MomentFilterSelector fetchMoments={fetchMoments}/>
                <Box>
                    <MomentList/>
                </Box>
                <FabAddMoment/>
            </Box>
        </MomentProvider>
    );
}
export default MomentScreen;

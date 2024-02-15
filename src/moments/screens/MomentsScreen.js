import React from 'react';
import {Box} from "@mui/material";
import MomentFilterSelector from "../components/momentMain/MomentFilterSelector";
import MomentList from "../components/momentMain/MomentList";
import FabAddMoment from "../components/momentMain/FabAddMoment";
import MomentProvider from "../provider/MomentProvider";

const MomentScreen = () => {
    return (
        <MomentProvider>
            <Box sx={{display: 'grid', justifyContent: 'center', marginTop: '20px'}}>
                <MomentFilterSelector/>
                <MomentList/>
                <FabAddMoment/>
            </Box>
        </MomentProvider>
    );
}
export default MomentScreen;

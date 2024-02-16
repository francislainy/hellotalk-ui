import React from 'react';
import {Box} from "@mui/material";
import MomentFilterSelector from "../components/momentMain/MomentFilterSelector/MomentFilterSelector";
import MomentList from "../components/momentMain/MomentList/MomentList";
import FabAddMoment from "../components/momentMain/FabAddMoment/FabAddMoment";
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

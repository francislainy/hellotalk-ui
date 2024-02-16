import React from 'react';
import {Box} from "@mui/material";
import MomentFilterSelector from "../../components/momentMain/MomentFilterSelector/MomentFilterSelector";
import MomentList from "../../components/momentMain/MomentList/MomentList";
import FabAddMoment from "../../components/momentMain/FabAddMoment/FabAddMoment";
import MomentProvider from "../../provider/MomentProvider";
import './MomentScreen.css';

const MomentScreen = () => {
    return (
        <MomentProvider>
            <Box className="moment-screen">
                <MomentFilterSelector/>
                <MomentList/>
                <FabAddMoment/>
            </Box>
        </MomentProvider>
    );
}
export default MomentScreen;

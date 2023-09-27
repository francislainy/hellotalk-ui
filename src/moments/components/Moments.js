import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";

import {getMoments} from "../../api/api";
import MomentList from "./MomentList";
import FabAddMoment from "./FabAddMoment";
import MomentFilterSelector from "./MomentFilterSelector";

const Moments = () => {
    const [moments, setMoments] = useState([])

    const fetchMoments = async (param) => {
        try {
            const response = await getMoments(param);
            setMoments(response.data);
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        fetchMoments('');
    }, []);

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

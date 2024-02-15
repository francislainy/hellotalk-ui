import React, {useContext} from 'react'
import {Box, List} from "@mui/material";
import MomentItem from "./MomentItem";
import MomentContext from "../../contexts/MomentContext";

const MomentList = () => {
    const {moments} = useContext(MomentContext);

    return <Box sx={{width: '100%', alignSelf: 'start'}}>
        <List style={{width: '100%'}}>
            {moments?.map((moment, index) => (
                <MomentItem key={index} moment={moment} index={moment.id}/>
            ))}
        </List>
    </Box>
}

export default MomentList;
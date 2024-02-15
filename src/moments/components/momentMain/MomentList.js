import React from 'react'
import {Box, List} from "@mui/material";
import MomentItem from "./MomentItem";

const MomentList = ({moments}) => {
    return <Box sx={{width: '100%', alignSelf: 'start'}}>
        <List style={{width: '100%'}}>
            {moments?.map((moment, index) => (
                <MomentItem key={index} moment={moment} index={moment.id}/>
            ))}
        </List>
    </Box>
}

export default MomentList;
import React from 'react'
import {Box, List} from "@mui/material";
import MomentItem from "./MomentItem";

const MomentList = ({moments}) => {
    return <Box>
        <List>
            {moments.map((moment, index) => (
                <MomentItem key={index} moment={moment} index={moment.id}/>
            ))}
        </List>
    </Box>
}

export default MomentList;
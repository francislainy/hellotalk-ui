import React from 'react'
import {Fab} from "@mui/material";
import colors from "../../../colors/colors";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";

const FabAddMoment = () => {
    const navigate = useNavigate();

    return <Fab
        aria-label="add"
        sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: colors.primary,
            '&:hover': {
                backgroundColor: colors.darkPurple,
            }
        }}
        onClick={() => navigate('/moments/add')}
    >
        <AddIcon/>
    </Fab>
}

export default FabAddMoment;
import React from 'react';
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";
import './FabAddMoment.css';

const FabAddMoment = () => {
    const navigate = useNavigate();

    return (
        <Fab
            aria-label="add"
            className="fab-add-moment"
            onClick={() => navigate('/moments/add')}
        >
            <AddIcon/>
        </Fab>
    );
};

export default FabAddMoment;

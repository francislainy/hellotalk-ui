import React from "react";
import {Button} from "@mui/material";
import colors from "../colors";

const UserTabs = ({loadComponent}) => {
    return <div style={{display: 'flex', justifyContent: 'space-between', marginTop: "50px"}}>
        <Button sx={{
            backgroundColor: colors.primary, '&:hover': {
                backgroundColor: colors.darkPurple, // replace with your hover color
            }, color: colors.white, marginRight: "8px"
        }} onClick={() => loadComponent('profile')}>Profile</Button>
        <Button sx={{
            backgroundColor: colors.primary, '&:hover': {
                backgroundColor: colors.darkPurple, // replace with your hover color
            }, color: colors.white
        }} onClick={() => loadComponent('moments')}>Moments</Button>
    </div>
}

export default UserTabs;
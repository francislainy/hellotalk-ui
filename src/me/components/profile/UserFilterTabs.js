import React, { useState } from "react";
import {Button} from "@mui/material";
import colors from "../../../colors/colors";

const UserFilterTabs = ({loadComponent}) => {
    const [selectedTab, setSelectedTab] = useState('profile');

    const handleButtonClick = (tabName) => {
        setSelectedTab(tabName);
        loadComponent(tabName);
    }

    const renderButton = (tabName, label) => (
        <Button sx={{
            backgroundColor: selectedTab === tabName ? colors.darkPurple : colors.white,
            '&:hover': {
                backgroundColor: selectedTab === tabName ? colors.darkPurple : colors.white,
            },
            color: selectedTab === tabName ? colors.white : colors.darkPurple,
            marginRight: tabName === 'profile' || 'moments' ? "8px" : "0px",
        }} onClick={() => handleButtonClick(tabName)}>{label}</Button>
    );

    return <div style={{display: 'flex', justifyContent: 'space-between', marginTop: "50px"}}>
        {renderButton('profile', 'Profile')}
        {renderButton('moments', 'Moments')}
        {renderButton('sayHi', 'Say Hi')}
    </div>
}

export default UserFilterTabs;
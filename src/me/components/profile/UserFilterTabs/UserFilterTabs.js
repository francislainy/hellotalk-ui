import React, { useState } from "react";
import {Button} from "@mui/material";
import colors from "../../../../colors/colors";
import {USER_ID} from "../../../../constants/constants";

const UserFilterTabs = ({ setComponentName, sayHi, user }) => {
    const [selectedTab, setSelectedTab] = useState('profile');

    const handleButtonClick = (tabName) => {
        setSelectedTab(tabName);
        setComponentName(tabName);
    }

    const renderButton = (tabName, label, onClick) => (
        <Button
            sx={{
                backgroundColor: selectedTab === tabName ? colors.darkPurple : colors.white,
                '&:hover': {
                    backgroundColor: selectedTab === tabName ? colors.darkPurple : colors.white,
                },
                color: selectedTab === tabName ? colors.white : colors.darkPurple,
                marginRight: tabName === 'profile' || 'moments' ? "8px" : "0px",
            }}
            onClick={onClick || (() => handleButtonClick(tabName))}
        >
            {label}
        </Button>
    );

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: "50px"}}>
            {renderButton('profile', 'Profile')}
            {renderButton('moments', 'Moments')}
            {user.id !== USER_ID && renderButton('sayHi', 'Say Hi', sayHi)}
        </div>
    );
}

export default UserFilterTabs;

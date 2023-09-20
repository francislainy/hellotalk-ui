import React, {useState} from 'react';
import UserBanner from "./UserBanner";
import Profile from "../UnderConstruction";
import Moments from "../Moments/Moments";
import {Button} from "@mui/material";
import colors from "../colors";

const User = () => {
    const user = {
        name: 'User 1',
        avatar: 'url_to_avatar_image',
        latestMessage: 'Hello, this is the latest message from user 1',
    };

    const [component, setComponent] = useState(null);

    const loadComponent = (componentName) => {
        switch (componentName) {
            case 'profile':
                setComponent(<Profile/>);
                break;
            case 'moments':
                setComponent(<Moments/>);
                break;
            default:
                setComponent(null);
        }
    }

    return (
        <>
            <UserBanner user={user}/>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: "50px"}}>
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
            {component}
        </>
    );
}

export default User;
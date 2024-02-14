import React from 'react';
import {useUser} from "../hooks/useUser";
import UserBanner from "../components/profile/UserBanner/UserBanner";
import UserFilterTabs from "../components/profile/UserFilterTabs/UserFilterTabs";
import UserProvider from "../provider/UserProvider";

const MeScreen = () => {
    const {user, setComponentName, Component} = useUser();

    return (
        <UserProvider>
            {user && (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <UserBanner/>
                    <UserFilterTabs setComponentName={setComponentName}/>
                    {Component && <Component user={user}/>}
                </div>
            )}
        </UserProvider>
    );
};

export default MeScreen;
import React from 'react';
import {useUser} from "../../../hooks/useUser";
import UserBanner from "../UserBanner/UserBanner";
import UserFilterTabs from "../UserFilterTabs/UserFilterTabs";

const Me = () => {
    const { userInfo, setComponentName, Component } = useUser();

    return (
        <>
            {userInfo && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <UserBanner user={userInfo} />
                    <UserFilterTabs setComponentName={setComponentName} userInfo={userInfo} />
                    {Component && <Component userInfo={userInfo} />}
                </div>
            )}
        </>
    );
};

export default Me;
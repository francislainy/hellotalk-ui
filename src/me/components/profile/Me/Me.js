import React from 'react';
import {useUser} from "../../../hooks/useUser";
import UserBanner from "../UserBanner/UserBanner";
import UserFilterTabs from "../UserFilterTabs/UserFilterTabs";

const Me = () => {
    const { user, setComponentName, Component } = useUser();

    return (
        <>
            {user && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <UserBanner user={user}/>
                    <UserFilterTabs setComponentName={setComponentName} user={user} />
                    {Component && <Component user={user} />}
                </div>
            )}
        </>
    );
};

export default Me;
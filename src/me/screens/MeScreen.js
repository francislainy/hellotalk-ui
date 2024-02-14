import React, {useEffect, useState} from 'react';
import {useUser} from "../hooks/useUser";
import UserProfile from "../components/profile/UserProfile/UserProfile";
import Moments from "../../moments/components/Moments";
import UserBanner from "../components/profile/UserBanner/UserBanner";
import UserFilterTabs from "../components/profile/UserFilterTabs/UserFilterTabs";

const COMPONENTS = {
    profile: UserProfile,
    moments: Moments,
};

const MeScreen = () => {
    const { userInfo, isLoading, fetchUser } = useUser();
    const [componentName, setComponentName] = useState('profile');

    useEffect(() => {
        fetchUser();
    }, [isLoading]);

    const Component = COMPONENTS[componentName];

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

export default MeScreen;

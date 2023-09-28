import React, {useEffect, useState} from 'react';
import {useUser} from "../components/hooks/useUser";
import UserProfile from "../components/User/profile/UserProfile";
import Moments from "../../moments/components/Moments";
import UserBanner from "../components/User/profile/UserBanner";
import UserFilterTabs from "../components/User/profile/UserFilterTabs";

const MeScreen = () => {
    const {userInfo, isLoading, fetchUser} = useUser();

    const [component, setComponent] = useState(null);
    const loadComponent = (componentName) => {
        switch (componentName) {
            case 'profile':
                setComponent(<UserProfile userInfo={userInfo}/>);
                break;
            case 'moments':
                setComponent(<Moments/>);
                break;
            default:
                setComponent(null);
        }
    }

    useEffect(() => {
        fetchUser();
        setComponent(<UserProfile userInfo={userInfo}/>)
    }, [isLoading]);

    return (
        <>
            {userInfo &&
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <UserBanner user={userInfo}/>
                    <UserFilterTabs loadComponent={loadComponent} userInfo={userInfo}/>
                    {component}
                </div>
            }
        </>
    );
}

export default MeScreen;
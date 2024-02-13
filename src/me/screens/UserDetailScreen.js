import React, {useEffect, useState} from 'react';
import UserBanner from "../components/profile/UserBanner/UserBanner";
import UserFilterTabs from "../components/profile/UserFilterTabs/UserFilterTabs";
import UserProfile from "../components/profile/UserProfile/UserProfile";
import Moments from "../../moments/components/Moments";
import {useNavigate, useParams} from "react-router-dom";
import {createMessage} from "../../api/api";
import {useUser} from "../hooks/useUser";

const UserDetailScreen = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const {userInfo, isLoading, fetchUser} = useUser(id);
    const [component, setComponent] = useState(null);

    const message = {
        content: 'Hi',
        userToId: userInfo.id
    }

    const loadComponent = (componentName) => {
        switch (componentName) {
            case 'profile':
                setComponent(<UserProfile userInfo={userInfo}/>);
                break;
            case 'moments':
                setComponent(<Moments/>);
                break;
            case 'sayHi':
                createMessage(message)
                navigate(`/`);
                break;
            default:
                setComponent(null);
        }
    }

    useEffect(() => {
        fetchUser();
        setComponent(<UserProfile userInfo={userInfo}/>)
    }, [isLoading]);

    return <>
        {userInfo &&
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <UserBanner user={userInfo}/>
                <UserFilterTabs loadComponent={loadComponent} userInfo={userInfo}/>
                {component}
            </div>
        }
    </>
}

export default UserDetailScreen;
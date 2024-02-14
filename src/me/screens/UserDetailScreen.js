import React, {useEffect, useState} from 'react';
import UserBanner from "../components/profile/UserBanner/UserBanner";
import UserFilterTabs from "../components/profile/UserFilterTabs/UserFilterTabs";
import UserProfile from "../components/profile/UserProfile/UserProfile";
import Moments from "../../moments/components/Moments";
import {useNavigate, useParams} from "react-router-dom";
import {createMessage} from "../../api/api";
import {useUser} from "../hooks/useUser";

const COMPONENTS = {
    profile: UserProfile,
    moments: Moments,
};

const UserDetailScreen = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, isLoading, fetchUser } = useUser(id);
    const [componentName, setComponentName] = useState('profile');

    const message = {
        content: 'Hi',
        userToId: user.id
    }

    const sayHi = () => {
        createMessage(message);
        navigate(`/`);
    };

    useEffect(() => {
        fetchUser();
    }, [isLoading]);

    const Component = COMPONENTS[componentName];

    return (
        <>
            {user && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <UserBanner user={user} />
                    <UserFilterTabs setComponentName={setComponentName} sayHi={sayHi} user={user} />
                    {Component && <Component user={user} />}
                </div>
            )}
        </>
    );
};

export default UserDetailScreen;

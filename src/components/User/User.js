import React, {useEffect, useState} from 'react';
import UserBanner from "./UserBanner";
import Profile from "../User/Profile";
import Moments from "../Moments/Moments";
import UserTabs from "./UserTabs";
import {getUser} from "../../api/api";
import {USER_ID} from "../constants";
import avatarImage from '../../images/avatar.png'

const User = () => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        avatar: '',
        latestMessage: '',
        selfIntroduction: [],
        hobbyAndInterests: [],
        interests: [],
        placesToVisit: [],
        occupation: [],
        hometown: [],
    });
    const [component, setComponent] = useState(null);

    const [isLoading, setIsLoading] = useState(true)

    const loadComponent = (componentName) => {
        switch (componentName) {
            case 'profile':
                setComponent(<Profile userInfo={userInfo}/>);
                break;
            case 'moments':
                setComponent(<Moments/>);
                break;
            default:
                setComponent(null);
        }
    }

    const fetchUser = async () => {
        try {
            const response = await getUser(USER_ID);
            const data = response.data;

            setUserInfo({
                selfIntroduction: data.selfIntroduction,
                interests: data.hobbyAndInterests,
                placesToVisit: data.placesToVisit ? [data.placesToVisit] : [],
                occupation: data.occupation ? [data.occupation] : [],
                hometown: data.hometown ? [data.hometown.city, data.hometown.country] : [],
                name: data.name,
                avatar: data.avatar || avatarImage,
                latestMessage: data.latestMessage,
            });

            setIsLoading(false)

        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchUser();
        setComponent(<Profile userInfo={userInfo}/>)
    }, [isLoading]);

    return (
        <>
            {userInfo &&
                <>
                    <UserBanner user={userInfo}/>
                    <UserTabs loadComponent={loadComponent} userInfo={userInfo}/>
                    {component}
                </>
            }
        </>
    );
}

export default User;
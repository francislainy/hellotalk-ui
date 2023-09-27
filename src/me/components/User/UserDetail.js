import React, {useEffect, useState} from 'react';
import UserBanner from "./UserBanner";
import {useParams} from "react-router-dom";
import {getUser} from "../../../api/api";
import UserTabs from "./UserTabs";
import Profile from "./Profile";
import Moments from "../../../moments/components/Moments";
import avatarImage from "../../../images/avatar.png";

const UserDetail = () => {

    const {id} = useParams();
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

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUser();
    }, []); // Fetch user when component mounts or id changes

    const [component, setComponent] = useState(null);
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
            const response = await getUser(id);
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

    return <>
        {userInfo &&
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <UserBanner user={userInfo}/>
                <UserTabs loadComponent={loadComponent} userInfo={userInfo}/>
                {component}
            </div>
        }
    </>
}

export default UserDetail;
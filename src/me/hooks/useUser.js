import {useState, useEffect} from 'react';
import {getUser} from "../../api/api";
import {USER_ID} from "../../constants/constants";
import avatarImage from '../../images/avatar.png'
import UserProfile from "../components/profile/UserProfile/UserProfile";
import Moments from "../../moments/components/Moments";

const COMPONENTS = {
    profile: UserProfile,
    moments: Moments,
};

export const useUser = (id = USER_ID) => {
    const [userInfo, setUserInfo] = useState({
        id: '',
        name: '',
        avatar: '',
        latestMessage: '',
        selfIntroduction: '',
        hobbyAndInterests: [],
        placesToVisit: [],
        occupation: [],
        hometown: [],
    });

    const [isLoading, setIsLoading] = useState(true)
    const [componentName, setComponentName] = useState('profile');

    const fetchUser = async () => {
        try {
            const response = await getUser(id);
            const data = response.data;

            setUserInfo({
                id: data.id,
                selfIntroduction: data.selfIntroduction,
                hobbyAndInterests: data.hobbyAndInterests,
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
    }, [id]); // Fetch user when component mounts or id changes

    const Component = COMPONENTS[componentName];

    return {userInfo, isLoading, fetchUser, componentName, setComponentName, Component};
}
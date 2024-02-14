import { useState, useEffect } from 'react';
import { getUser } from "../../api/api";
import { USER_ID } from "../../constants/constants";
import avatarImage from '../../images/avatar.png'
import UserProfile from "../components/profile/UserProfile/UserProfile";
import Moments from "../../moments/components/Moments";

const COMPONENTS = {
    profile: UserProfile,
    moments: Moments,
};

export const useUser = (id = USER_ID) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [componentName, setComponentName] = useState('profile');

    const fetchUser = async () => {
        try {
            const response = await getUser(id);
            const data = response.data;

            setUser({
                id: data.id,
                name: data.name,
                avatar: data.avatar || avatarImage,
                latestMessage: data.latestMessage,
                selfIntroduction: data.selfIntroduction,
                hobbyAndInterests: data.hobbyAndInterests,
                placesToVisit: data.placesToVisit ? [data.placesToVisit] : [],
                occupation: data.occupation ? [data.occupation] : [],
                hometown: data.hometown ? [data.hometown.city, data.hometown.country] : [],
            });

            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [id]);

    const Component = COMPONENTS[componentName];

    return { user, isLoading, fetchUser, componentName, setComponentName, Component };
}

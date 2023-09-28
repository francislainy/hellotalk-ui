import {useState, useEffect} from 'react';
import {getUser} from "../../../api/api";
import {USER_ID} from "../../../constants/constants";
import avatarImage from '../../../images/avatar.png'

export const useUser = () => {
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
    }, []); // Fetch user when component mounts

    return {userInfo, isLoading, fetchUser};
}
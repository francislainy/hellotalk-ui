import {useState, useEffect} from 'react';

export const useUserItem = (user, handleCreateFollowship, handleDeleteFollowship, followships) => {
    const [followButtonText, setFollowButtonText] = useState('Follow');

    useEffect(() => {
        const followship = followships.find(followship => followship.userToId === user.id);
        setFollowButtonText(followship ? 'Following' : 'Follow');
    }, [followships]);

    const handleFollow = async () => {
        const followship = followships.find(followship => followship.userToId === user.id);
        followship ? handleDeleteFollowship(followship.id) : handleCreateFollowship(user.id)
    };

    return {followButtonText, handleFollow};
};

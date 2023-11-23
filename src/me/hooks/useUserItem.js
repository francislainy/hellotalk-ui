import { useState, useEffect } from 'react';

export const useUserItem = (user, handleCreateFollowship, handleDeleteFollowship, followships) => {
    const [isFollowing, setIsFollowing] = useState()
    const [followButtonText, setFollowButtonText] = useState()

    const handleIsFollowing = async () => {
        const followship = followships.find(followship => followship.userToId === user.id);
        const action = followship? handleDeleteFollowship(followship.id) : handleCreateFollowship(user.id)

        return action.then(() => {
            setIsFollowing(!followship)
        });
    };

    const handleButtonText = async () => {
        const followship = followships.find(followship => followship.userToId === user.id);
        setFollowButtonText(followship ? 'Following' : 'Follow');
    };

    useEffect(() => {
        handleButtonText()
    }, [isFollowing])

    return { isFollowing, followButtonText, handleIsFollowing };
};
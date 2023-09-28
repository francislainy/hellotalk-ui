import { useState, useEffect } from 'react';

export const useUserItem = (user, handleCreateFollowship, handleDeleteFollowship, followships) => {
    const [isFollowing, setIsFollowing] = useState()
    const [followButtonText, setFollowButtonText] = useState()

    const handleIsFollowing = async () => {
        const followship = followships.find(followship => followship.userToId === user.id);
        if (followship) {
            return handleDeleteFollowship(followship.id)
                .then(() => {
                    setFollowButtonText('Following')
                    setIsFollowing(false)
                });
        } else {
            return handleCreateFollowship(user.id)
                .then(() => {
                    setFollowButtonText('Follow')
                    setIsFollowing(true)
                });
        }
    };

    const handleButtonText = async () => {
        const followship = followships.find(followship => followship.userToId === user.id);
        if (followship) {
            setFollowButtonText('Following')
        } else {
            setFollowButtonText('Follow')
        }
    };

    useEffect(() => {
        handleButtonText()
    }, [isFollowing])

    return { isFollowing, followButtonText, handleIsFollowing };
};
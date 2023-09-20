import React from 'react';
import UserBanner from "./UserBanner";

const User = () => {
    const user = {
        name: 'User 1',
        avatar: 'url_to_avatar_image',
        latestMessage: 'Hello, this is the latest message from user 1',
    };

    return (
        <>
            <UserBanner user={user}/>
        </>
    );
}

export default User;
import React from 'react';
import UserCard from '../components/User/UserCard';
import {USER_ID} from "./constants";

const Connect = () => {

    const users = [
        {
            id: 1,
            name: 'User 1',
            description: 'This is user 1',
            avatar: 'https://example.com/avatar1.png'
        },
        {
            id: 2,
            name: 'User 2',
            description: 'This is user 2',
            avatar: 'https://example.com/avatar2.png'
        },
        {
            id: 3,
            name: 'User 3',
            description: 'This is user 3',
            avatar: 'https://example.com/avatar3.png'
        },
        {
            id: 4,
            name: 'User 4',
            description: 'This is user 4',
            avatar: 'https://example.com/avatar4.png'
        },
        // Add more users as needed
    ];

    return (
        <div>
            {users
                .filter(user => user.id !== USER_ID)
                .map(user => (
                    <UserCard key={user.id} user={user}/>
                ))}
        </div>
    );
};

export default Connect;
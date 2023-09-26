import React, {useEffect, useState} from 'react';
import UserCard from '../components/User/UserCard';
import {USER_ID} from "./constants";
import {createFollowship, getUsers} from "../api/api";

const Connect = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUsers()
    }, [])

    const handleCreateFollowship = async (userToId) => {
        try {
            const followship = {
                userFromId: USER_ID,
                userToId: userToId
            };
            const response = await createFollowship(followship);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            {users
                .filter(user => user.id !== USER_ID)
                .map(user => (
                    <UserCard key={user.id} user={user} handleCreateFollowship={handleCreateFollowship}/>
                ))}
        </div>
    );
};

export default Connect;
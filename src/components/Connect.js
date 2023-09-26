import React, {useEffect, useState} from 'react';
import UserCard from '../components/User/UserCard';
import {USER_ID} from "./constants";
import {getUsers} from "../api/api";

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
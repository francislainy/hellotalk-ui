import {useEffect, useState} from 'react';
import {USER_ID} from "../../../constants/constants";
import {createFollowship, deleteFollowship, getFollowshipFromUser, getUsers} from "../../../api/api";

export const useUserList = () => {
    const [users, setUsers] = useState([])
    const [followships, setFollowships] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getFollowships = async () => {
        try {
            const response = await getFollowshipFromUser(USER_ID);
            setFollowships(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
        getFollowships()
    }, [])

    const handleCreateFollowship = async (userToId) => {
        try {
            const followship = {
                userFromId: USER_ID,
                userToId: userToId
            };
            return createFollowship(followship);
        } catch (error) {
            console.log(error)
        }
    };

    const handleDeleteFollowship = async (followshipId) => {
        try {
            return deleteFollowship(followshipId);
        } catch (error) {
            console.log(error)
        }
    };

    return { users, followships, getFollowships, handleCreateFollowship, handleDeleteFollowship };
};
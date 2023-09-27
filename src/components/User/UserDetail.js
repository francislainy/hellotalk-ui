import React, {useEffect, useState} from 'react';
import UserBanner from "./UserBanner";
import {useParams} from "react-router-dom";
import {getUser} from "../../api/api";

const UserDetail = () => {

    const {id} = useParams();
    const [user, setUser] = useState()

    const fetchUser = async () => {
        try {
            const response = await getUser(id);
            setUser(response.data);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []); // Fetch user when component mounts or id changes

    return <>
        {user !== undefined && <UserBanner user={user}/> }
    </>
}

export default UserDetail;
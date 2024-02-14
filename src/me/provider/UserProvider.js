import React from 'react';

import UserContext from '../contexts/UserContext';
import {useUser} from "../hooks/useUser";

const UserProvider = ({ children }) => {
    const {
        user,
        isLoading,
        fetchUser,
        // include other states and functions from useUser hook
    } = useUser();

    return (
        <UserContext.Provider value={{
            user,
            isLoading,
            fetchUser,
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

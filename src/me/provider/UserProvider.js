import React from 'react';

import UserContext from '../contexts/UserContext';
import {useUser} from "../hooks/useUser";

const UserProvider = ({ children }) => {
    const userState = useUser();

    return (
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

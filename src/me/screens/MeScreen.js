import React from 'react';
import UserProvider from "../provider/UserProvider";

const MeScreen = () => {
    return (
        <UserProvider>
            <div>
                <MeScreen/>
            </div>
        </UserProvider>
    );
}

export default MeScreen;


import React from 'react';
import MomentContext from "../contexts/MomentContext";
import useMoments from "../hooks/useMoments";

const MomentProvider = ({ children }) => {
    const userState = useMoments();

    return (
        <MomentContext.Provider value={userState}>
            {children}
        </MomentContext.Provider>
    );
}

export default MomentProvider;

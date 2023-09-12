import React from 'react';
import { useNavigate } from 'react-router-dom';

const Moment = ({ moment, index }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/moment-detail/${index}`);
    };

    return (
        <div onClick={handleClick}>
            {/* Display the moment data here */}
        </div>
    );
};

export default Moment;
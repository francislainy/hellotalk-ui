// MomentDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MomentDetail = () => {
    const { id } = useParams(); // get the id from the URL

    // Fetch the comment details using the id...
    // For now, let's just display the id

    return (
        <div>
            <h1>Moment Detail</h1>
            <p>Moment ID: {id}</p>
        </div>
    );
};

export default MomentDetail;
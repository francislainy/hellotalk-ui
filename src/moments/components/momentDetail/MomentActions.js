import React from 'react';
import { Button } from '@mui/material';

const MomentActions = ({ momentUserId, currentUserId, isEditing, handleUpdate, handleDelete }) => {
    if (momentUserId !== currentUserId || isEditing) {
        return null;
    }

    return (
        <div>
            <Button variant="contained" color="secondary" style={{marginRight: 8}} onClick={handleUpdate}>
                Update
            </Button>
            <Button variant="contained" color="secondary" onClick={handleDelete}>
                Delete
            </Button>
        </div>
    );
};

export default MomentActions;
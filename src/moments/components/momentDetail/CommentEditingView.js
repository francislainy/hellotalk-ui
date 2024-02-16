import React from 'react';
import {Button, TextField} from '@mui/material';
import './MomentDetail.css';

const CommentEditingView = ({updatedContent, setUpdatedContent, handleSave}) => (
    <>
        <TextField
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            className="moment-detail__edit-input"
        />
        <Button
            variant="contained"
            onClick={handleSave}
            className="moment-detail__save-button"
        >
            Save
        </Button>
    </>
);

export default CommentEditingView;

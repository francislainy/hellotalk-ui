import React from 'react';
import {Box, IconButton, Typography} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import './MomentDetail.css';

const MomentStats = ({isLiked, handleLike, likes, comments, handleCommentIconClick}) => (
    <Box className="moment-detail__actions">
        <IconButton
            disableRipple
            className={isLiked ? "moment-detail__like-icon--liked" : "moment-detail__like-icon"}
            onClick={handleLike}
        >
            <ThumbUpIcon />
        </IconButton>
        <Typography variant="body2" className="moment-detail__stats">
            {likes}
        </Typography>
        <CommentIcon className="moment-detail__comment-icon" onClick={handleCommentIconClick} />
        <Typography variant="body2" className="moment-detail__stats">
            {comments}
        </Typography>
    </Box>
);

export default MomentStats;

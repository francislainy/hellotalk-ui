import React, {useEffect, useState} from 'react';
import {Box, Button, Card, IconButton, TextField, Typography} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import './MomentDetail.css';
import {likeMoment, unlikeMoment} from "../../../api/api";
import {USER_ID} from "../../../constants/constants";

const MomentDetail = ({moment, isEditing, updatedContent, setUpdatedContent, handleSave, handleCommentIconClick}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = async (e) => {
        e.stopPropagation();
        try {
            isLiked ? await unlikeMoment(moment.id) : await likeMoment(moment.id);
            setIsLiked(!isLiked);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        setIsLiked(moment && moment.likedByIds ? moment.likedByIds.includes(USER_ID) : false);
    }, [moment]);

    return (
        <Card className="moment-detail">
            <Box className="moment-detail__content">
                {isEditing ? (
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
                ) : (
                    <Typography variant="h5">{moment.content}</Typography>
                )}
                <Box className="moment-detail__actions">
                    <IconButton
                        disableRipple
                        className={isLiked ? "moment-detail__like-icon--liked" : "moment-detail__like-icon"}
                        onClick={handleLikeClick}
                    >
                        <ThumbUpIcon />
                    </IconButton>
                    <Typography variant="body2" className="moment-detail__stats">
                        {moment.likes}
                    </Typography>
                    <CommentIcon className="moment-detail__comment-icon" onClick={handleCommentIconClick} />
                    <Typography variant="body2" className="moment-detail__stats">
                        {moment.comments}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default MomentDetail;

import React, {useEffect, useState} from 'react';
import {Box, Card, Typography} from '@mui/material';
import './MomentDetail.css';
import {likeMoment, unlikeMoment} from "../../../api/api";
import {USER_ID} from "../../../constants/constants";
import MomentStats from "./MomentStats";
import CommentEditingView from "./CommentEditingView";

const MomentDetail = ({moment, isEditing, updatedContent, setUpdatedContent, handleSave, handleCommentIconClick}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = async () => {
        const action = isLiked ? unlikeMoment : likeMoment;
        try {
            await action(moment.id);
            setIsLiked(!isLiked);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        const userHasLiked = moment?.likedByIds?.includes(USER_ID) || false;
        setIsLiked(userHasLiked);
    }, [moment]);

    return (
        <Card className="moment-detail">
            <Box className="moment-detail__content">
                {isEditing ? (
                    <CommentEditingView
                        updatedContent={updatedContent}
                        setUpdatedContent={setUpdatedContent}
                        handleSave={handleSave}
                    />
                ) : (
                    <Typography variant="h5">{moment.content}</Typography>
                )}
                <MomentStats
                    isLiked={isLiked}
                    handleLike={handleLike}
                    likes={moment.likes}
                    comments={moment.comments}
                    handleCommentIconClick={handleCommentIconClick}
                />
            </Box>
        </Card>
    );
};
export default MomentDetail;

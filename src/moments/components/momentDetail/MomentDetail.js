import React, {useEffect, useState} from 'react';
import {Box, Button, Card, IconButton, TextField, Typography} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import colors from "../../../colors/colors";
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
        <Card sx={{backgroundColor: colors.white, width: 1, mt: 2, ml: 0, mr: 0, boxShadow: 'none'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {isEditing ? (
                    <>
                        <TextField
                            value={updatedContent}
                            onChange={(e) => setUpdatedContent(e.target.value)}
                            sx={{width: '75%', textAlign: 'center'}}
                        />
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            sx={{marginTop: 2, backgroundColor: colors.primary}}
                        >
                            Save
                        </Button>
                    </>
                ) : (
                    <Typography variant="h5">{moment.content}</Typography>
                )}
                <Box sx={{display: 'flex', alignItems: 'center', mt: 2}}>
                    <IconButton disableRipple className={isLiked ? "moment_item__like_icon--liked" : "moment_item__like_icon"} onClick={handleLikeClick}>
                        <ThumbUpIcon/>
                    </IconButton>
                    <Typography variant="body2" sx={{ml: 1}}>{moment.likes}</Typography>
                    <CommentIcon className="moment_detail__comment_icon" sx={{ml: 2}}
                                 onClick={handleCommentIconClick}/>
                    <Typography variant="body2" sx={{ml: 1}}>{moment.comments}</Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default MomentDetail;
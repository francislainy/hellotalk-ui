import React from 'react';
import {Avatar, Box, Button, Card, TextField, Typography} from '@mui/material';
import colors from "../../../colors/colors";
import avatarImage from "../../../images/avatar.png";
import {USER_ID} from "../../../constants/constants";
import {useComment} from "../../hooks/useComment";

const CommentCard = ({comment, momentId, fetchComments}) => {
    const {
        isEditing,
        updatedContent,
        setUpdatedContent,
        handleDelete,
        handleUpdate
    } = useComment(comment, momentId, fetchComments);

    return (
        <Card
            sx={{backgroundColor: colors.chatItemBackground, mt: 2, boxShadow: 'none'}}
        >
            <Box sx={{display: 'flex', alignItems: 'center', p: 2}}>
                <Avatar src={avatarImage}/>
                <Box sx={{ml: 2}}>
                    {isEditing ? (
                        <TextField
                            value={updatedContent}
                            onChange={(e) => setUpdatedContent(e.target.value)}
                        />
                    ) : (
                        <>
                            <Typography variant="subtitle2">{comment.user.name}</Typography>
                            <Typography variant="body2">{comment.content}</Typography>
                        </>
                    )}
                    {comment.user.id.toString() === USER_ID && (
                        <>
                            <Button onClick={handleDelete} sx={{color: colors.primary}}>
                                Delete
                            </Button>
                            <Button onClick={handleUpdate} sx={{color: colors.primary}}>
                                {isEditing ? 'Save' : 'Update'}
                            </Button>
                        </>
                    )}
                </Box>
            </Box>
        </Card>
    );
};

export default CommentCard;
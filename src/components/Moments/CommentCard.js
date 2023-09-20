import React, {useState} from 'react';
import {Avatar, Box, Card, Typography, Button, TextField} from '@mui/material';
import colors from "../colors";
import avatarImage from "../../images/avatar.png";
import {deleteComment, updateComment} from '../../api/api';
import {USER_ID} from "../constants";

const CommentCard = ({comment, momentId, fetchComments}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdatedContent] = useState(comment.content);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            await deleteComment(momentId, comment.id);
            fetchComments();
        }
    };

    const handleUpdate = async () => {
        if (isEditing) {
            await updateComment(momentId, comment.id, updatedContent);
            fetchComments();
        }
        setIsEditing(!isEditing);
    };

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
                    {comment.user.id === USER_ID && (
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
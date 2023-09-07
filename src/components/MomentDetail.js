// src/components/MomentDetail.js
import React from 'react';
import {useParams} from 'react-router-dom';
import {Box, Avatar, Typography, Card, CardContent} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import avatarImage from '../images/avatar.png'; // Keep the hardcoded avatar image
import colors from "./colors";

const MomentDetail = () => {
    const {id} = useParams();

    // Replace with your actual moment data
    const moment = {
        id: 1,
        content: 'This is a moment',
        likes: 10,
        comments: 2,
    };

    // Replace with your actual comments data
    const comments = [
        {
            user: {
                name: 'User 1',
                avatar: avatarImage, // Use the hardcoded avatar image
            },
            text: 'This is a comment from user 1',
        },
        {
            user: {
                name: 'User 2',
                avatar: avatarImage, // Use the hardcoded avatar image
            },
            text: 'This is another comment from user 2',
        },
    ];


    return (
        <Box sx={{display: 'flex', justifyContent: 'center', height: '100vh'}}>
            <Card sx={{width: '80%', marginBottom: 4, marginTop: 4, backgroundColor: colors.white, boxShadow: 'none'}}>
                <CardContent>
                    <Box sx={{p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Card sx={{backgroundColor: colors.white, width: 1, mt: 2, ml: 0, mr: 0, boxShadow: 'none'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant="h5">{moment.content}</Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', mt: 2}}>
                                    <ThumbUpIcon/>
                                    <Typography variant="body2" sx={{ml: 1}}>{moment.likes}</Typography>
                                    <CommentIcon sx={{ml: 2}}/>
                                    <Typography variant="body2" sx={{ml: 1}}>{moment.comments}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Box sx={{width: '100%'}}>
                            {comments.map((comment, index) => (
                                <Card key={index} sx={{backgroundColor: colors.chatItemBackground, mt: 2, boxShadow: 'none'}}>
                                    <Box sx={{display: 'flex', alignItems: 'center', p: 2}}>
                                        <Avatar src={comment.user.avatar}/>
                                        <Box sx={{ml: 2}}>
                                            <Typography variant="subtitle2">{comment.user.name}</Typography>
                                            <Typography variant="body2">{comment.text}</Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MomentDetail;
import React from 'react';
import {Avatar, Box, Typography, IconButton, Card, CardContent} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import avatarImage from '../../images/avatar.png';

const MomentItem = ({ moment }) => {
    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={moment.user.name} src={avatarImage} />
                    <Box sx={{ marginLeft: 2 }}>
                        <Typography variant="subtitle1">{moment.user.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{moment.user.info}</Typography>
                    </Box>
                </Box>
                <Typography variant="body1">{moment.content}</Typography>
                <Box sx={{ display: 'flex', marginTop: 1 }}>
                    <IconButton aria-label="like">
                        <ThumbUpIcon />
                    </IconButton>
                    <IconButton aria-label="comment">
                        <CommentIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default MomentItem;
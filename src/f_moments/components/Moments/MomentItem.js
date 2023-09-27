import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Avatar, Box, Typography, IconButton, Card, CardContent} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import avatarImage from '../../../images/avatar.png';

const MomentItem = ({moment, index}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/moment-detail/${index}`);
    };

    return (
        <div onClick={handleClick}>
            <Card sx={{marginBottom: 2}}>
                <CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Avatar alt={moment.userId} src={avatarImage}/>
                        <Box sx={{marginLeft: 2}}>
                            <Typography variant="subtitle1">{moment.userId}</Typography>
                            <Typography variant="body2" color="textSecondary">{moment.userId}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="body1">{moment.content}</Typography>
                    <Box sx={{display: 'flex', marginTop: 1}}>
                        <IconButton aria-label="like">
                            <ThumbUpIcon/>
                        </IconButton>
                        <IconButton aria-label="comment">
                            <CommentIcon/>
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default MomentItem;

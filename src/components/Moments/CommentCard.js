import React from 'react';
import {Avatar, Box, Card, Typography} from '@mui/material';
import colors from "../colors";
import avatarImage from "../../images/avatar.png";

const CommentCard = ({comment}) => (
    <Card
        sx={{backgroundColor: colors.chatItemBackground, mt: 2, boxShadow: 'none'}}
    >
        <Box sx={{display: 'flex', alignItems: 'center', p: 2}}>
            <Avatar src={avatarImage}/>
            <Box sx={{ml: 2}}>
                <Typography variant="subtitle2">{comment.user.name}</Typography>
                <Typography variant="body2">{comment.content}</Typography>
            </Box>
        </Box>
    </Card>
);

export default CommentCard;
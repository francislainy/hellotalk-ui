import React from 'react';
import avatarImage from '../../../images/avatar.png'
import {Avatar, Box, Typography} from "@mui/material";
import './ChatItem.css';
import {USER_ID} from "../../../constants/constants";

const ChatItem = ({chat, message, index}) => {
    const messageType = message.userFromId === USER_ID ? 'me' : 'other';

    return (
        <Box key={index} className={messageType}>
            <Avatar src={avatarImage} className="avatar"  sx={{width: 32, height: 32}}/>
            <Typography className="text">{message.content}</Typography>
        </Box>
    );
};

export default ChatItem;

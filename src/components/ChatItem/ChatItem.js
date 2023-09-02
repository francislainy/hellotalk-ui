import React from 'react';
import avatarImage from "../../images/avatar.png";
import { Avatar, Box, Typography } from "@mui/material";
import './ChatItem.css';

const ChatItem = ({ chat, message, index }) => {
    return (
        <Box key={index} className={message.type}>
            <Avatar alt={chat.name} src={avatarImage} className="avatar" sx={{width: 32, height: 32}}  />
            <Typography className="text">{message.text}</Typography>
        </Box>
    );
};

export default ChatItem;
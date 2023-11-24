import React from 'react';
import avatarImage from '../../../images/avatar.png'
import {Avatar, Box, Typography} from "@mui/material";
import './ChatItem.css';
import {USER_ID} from "../../../constants/constants";

import { IconButton } from '@mui/material'; // Import IconButton from @mui/material
import EditIcon from '@mui/icons-material/Edit'; // Import EditIcon from @mui/icons-material
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon from @mui/icons-material

const ChatItem = ({chat, message, index, editMessage, deleteMessage}) => {
    const messageType = message.userFromId === USER_ID ? 'me' : 'other';

    return (
        <Box key={index} className={messageType}>
            <Avatar src={avatarImage} className="avatar"  sx={{width: 32, height: 32}}/>
            <Typography className="text">{message.content}</Typography>
            {messageType === 'me' && (
                <div>
                    <IconButton onClick={() => editMessage(index)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteMessage(index)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            )}
        </Box>
    );
};

export default ChatItem;

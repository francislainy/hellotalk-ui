import React, {useContext} from 'react';

import avatarImage from '../../../images/avatar.png'
import {Avatar, Box, IconButton, TextField, Typography} from "@mui/material";
import './MessageItem.css';
import {USER_ID} from "../../../constants/constants";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom";
import ChatContext from "../../contexts/ChatContext";

const MessageItem = ({message, index}) => {
    const {
        handleDelete,
        handleUpdate,
        updatedContent,
        setUpdatedContent,
        isAnyItemEditing,
        setIsAnyItemEditing,
        editingMessageId,
        setEditingMessageId,
    } = useContext(ChatContext);

    const messageType = message.userFromId === USER_ID ? 'me' : 'other';

    const navigate = useNavigate();

    const handleOnClickAvatar = () => {
        navigate(`/users/${message.userFromId}`);
    }

    return (
        <Box key={index} className={messageType}>
            <Avatar src={avatarImage} className="avatar" sx={{width: 32, height: 32}} onClick={handleOnClickAvatar}/>
            {editingMessageId === message.id ? (
                <div>
                    <TextField value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)}/>
                    <IconButton onClick={() => {
                        handleUpdate(message.id, updatedContent);
                        setEditingMessageId(null);
                        setIsAnyItemEditing(false);
                    }}>
                        <SaveIcon/>
                    </IconButton>
                    <IconButton onClick={() => {
                        setEditingMessageId(null);
                        setIsAnyItemEditing(false);
                    }}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            ) : (
                <Typography className="text">{message.content}</Typography>
            )}
            {messageType === 'me' && editingMessageId !== message.id && !isAnyItemEditing && (
                <div>
                    <IconButton onClick={() => {
                        setEditingMessageId(message.id);
                        setIsAnyItemEditing(true);
                    }}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={() => handleDelete(message.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            )}
        </Box>
    );
};

export default MessageItem;
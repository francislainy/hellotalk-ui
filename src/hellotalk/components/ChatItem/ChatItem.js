import React from 'react';

import avatarImage from '../../../images/avatar.png'
import {Avatar, Box, IconButton, TextField, Typography} from "@mui/material";
import './ChatItem.css';
import {USER_ID} from "../../../constants/constants";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import useChat from "../../hooks/useChat";
import {useNavigate} from "react-router-dom";

const ChatItem = ({
                      message, index, handleDelete,
                      handleUpdate,
                      updatedContent,
                      setUpdatedContent,
                      isAnyItemEditing,
                      setIsAnyItemEditing
                  }) => {
    const {isEditing, setIsEditing} = useChat(message);
    const messageType = message.userFromId === USER_ID ? 'me' : 'other';

    const navigate = useNavigate();

    const handleOnClickAvatar = () => {
        navigate(`/users/${message.userFromId}`);
    }

    return (
        <Box key={index} className={messageType}>
            <Avatar src={avatarImage} className="avatar" sx={{width: 32, height: 32}} onClick={handleOnClickAvatar}/>
            {isEditing ? (
                <div>
                    <TextField value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)}/>
                    <IconButton onClick={() => {
                        handleUpdate(message.id, updatedContent);
                        setIsEditing(false);
                        setIsAnyItemEditing(false);
                    }}>
                        <SaveIcon/>
                    </IconButton>
                    <IconButton onClick={() => {
                        setIsEditing(false);
                        setIsAnyItemEditing(false);
                    }}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            ) : (
                <Typography className="text">{message.content}</Typography>
            )}
            {messageType === 'me' && !isEditing && !isAnyItemEditing && (
                <div>
                    <IconButton onClick={() => {
                        setIsEditing(true);
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

export default ChatItem;
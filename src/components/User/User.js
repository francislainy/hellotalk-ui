import React from 'react';
import {Avatar, ListItemText, Typography} from "@mui/material";
import avatarImage from "../../images/avatar.png";

const User = () => {
    const chat = {
        name: 'User 1',
        avatar: 'url_to_avatar_image',
        latestMessage: 'Hello, this is the latest message from user 1',
    };

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Avatar alt={chat.name} src={avatarImage} sx={{width: 60, height: 60}}/>
            <div>
                <ListItemText
                    primary={<Typography variant="body1" sx={{fontWeight: 'bold'}}>{chat.name}</Typography>}
                    sx={{fontSize: '2.5em'}}
                />
                <ListItemText
                    secondary={chat.latestMessage}
                    sx={{fontSize: '2.5em'}} 
                />
                <ListItemText
                    secondary="Another line of text"
                    sx={{fontSize: '2.5em'}} 
                />
            </div>
        </div>
    );
}

export default User;
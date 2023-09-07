import React from 'react';
import { Avatar, Typography, Box } from "@mui/material";
import avatarImage from "../../images/avatar.png";

const User = () => {
    const user = {
        name: 'User 1',
        avatar: 'url_to_avatar_image',
        latestMessage: 'Hello, this is the latest message from user 1',
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Box width="100%" height={200} bgcolor="#f0f0f0" position="relative">
                <Box position="absolute" bottom={100} left="50%" style={{ transform: 'translateX(-50%)' }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ lineHeight: 1.2, color: '#7B1FA2', fontWeight: 'bold', textAlign: 'center', fontSize: '30px' }}>
                        {user.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ lineHeight: 1.2, color: '#000000DB', fontWeight: 'bold', textAlign: 'center' }}>
                        {user.latestMessage}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.2, color: '#000000DB', fontWeight: 'bold', textAlign: 'center' }}>
                        Another line of text
                    </Typography>
                </Box>
                <Avatar
                    alt={user.name}
                    src={avatarImage}
                    sx={{ width: 130, height: 130, border: '2px solid #7B1FA2', position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)' }}
                />
            </Box>
        </Box>
    );
}

export default User;
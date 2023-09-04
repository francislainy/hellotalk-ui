import React from 'react';
import {Avatar, Typography, Grid, Box} from "@mui/material";
import avatarImage from "../../images/avatar.png";

const User = () => {
    const chat = {
        name: 'User 1',
        avatar: 'url_to_avatar_image',
        latestMessage: 'Hello, this is the latest message from user 1',
    };

    return (
        <Box display="flex" justifyContent="center">
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Avatar alt={chat.name} src={avatarImage} sx={{width: 60, height: 60, border: '2px solid #3f51b5'}}/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="subtitle1" gutterBottom sx={{lineHeight: 1}}>
                                {chat.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{lineHeight: 1}}>
                                {chat.latestMessage}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{lineHeight: 1}}>
                                Another line of text
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default User;
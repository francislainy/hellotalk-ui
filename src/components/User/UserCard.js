import React from 'react';
import {Card, CardContent, Typography, Avatar, Button} from '@mui/material';
import colors from '../colors';
import avatarImage from "../../images/avatar.png";

const UserCard = ({user, handleCreateFollowship}) => {
    const cardStyle = {
        display: 'flex',
        marginBottom: '1em',
        borderRadius: '15px',
        alignItems: 'center',
        height: '100px',
        padding: '1em',
        boxSizing: 'border-box',
        marginLeft: '4em',
        marginRight: '4em',
    };

    const avatarStyle = {
        marginRight: '1em',
        height: '90%',
        width: 'auto',
    };

    const buttonStyle = {
        backgroundColor: colors.primary,
        color: 'white',
    };

    return (
        <Card style={cardStyle}>
            <Avatar style={avatarStyle} src={avatarImage}/>
            <CardContent>
                <Typography variant="h8" sx={{ color: colors.primary, fontWeight: 'bold' }}>
                    {user.name}
                </Typography>
                <Typography variant="body2">{user.description}</Typography>
                <Button style={buttonStyle} variant="contained" size="small" onClick={() => handleCreateFollowship(user.id)}>
                    Follow
                </Button>
            </CardContent>
        </Card>
    );
};

export default UserCard;
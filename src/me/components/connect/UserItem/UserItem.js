import React from 'react';
import {Avatar, Button, Card, CardContent, Typography} from '@mui/material';
import avatarImage from "../../../../images/avatar.png";
import {useNavigate} from "react-router-dom";
import {useUserItem} from '../../../hooks/useUserItem';
import './UserItem.css';
const UserItem = ({user, handleCreateFollowship, handleDeleteFollowship, followships}) => {
    const navigate = useNavigate()

    const {
        followButtonText,
        handleFollow
    } = useUserItem(user, handleCreateFollowship, handleDeleteFollowship, followships);

    const handleOnClickAvatar = () => {
        navigate(`/users/${user.id}`);
    }

    return (
        <Card className="cardStyle">
            <Avatar className="avatarStyle" src={avatarImage} onClick={handleOnClickAvatar}/>
            <CardContent>
                <Typography variant="h8" className="textStyle">
                    {user.name}
                </Typography>
                <Typography variant="body2">{user.description}</Typography>
                <Button className="buttonStyle" variant="contained" size="small"
                        onClick={handleFollow}>
                    {followButtonText}
                </Button>
            </CardContent>
        </Card>
    );
};

export default UserItem;
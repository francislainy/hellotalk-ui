import React, {useEffect, useState} from 'react';
import {Avatar, Button, Card, CardContent, Typography} from '@mui/material';
import colors from '../colors';
import avatarImage from "../../images/avatar.png";
import {useNavigate} from "react-router-dom";

const UserCard = ({user, handleCreateFollowship, handleDeleteFollowship, followships}) => {

    const navigate = useNavigate()

    const [isFollowing, setIsFollowing] = useState()
    const [followButtonText, setFollowButtonText] = useState()

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

    const handleIsFollowing = async () => {
        const followship = followships.find(followship => followship.userToId === user.id);
        if (followship) {
            return handleDeleteFollowship(followship.id)
                .then(() => {
                    setFollowButtonText('Following')
                    setIsFollowing(false)
                });
        } else {
            return handleCreateFollowship(user.id)
                .then(() => {
                    setFollowButtonText('Follow')
                    setIsFollowing(true)
                });
        }
    };

    const handleButtonText = async () => {
        const followship = followships.find(followship => followship.userToId === user.id);
        if (followship) {
            setFollowButtonText('Following')
        } else {
            setFollowButtonText('Follow')
        }
    };

    const handleOnClickAvatar = () => {
        navigate(`/users/${user.id}`);
    }

    useEffect(() => {
        handleButtonText()
    }, [isFollowing])

    return (
        <Card style={cardStyle}>
            <Avatar style={avatarStyle} src={avatarImage} onClick={handleOnClickAvatar}/>
            <CardContent>
                <Typography variant="h8" sx={{color: colors.primary, fontWeight: 'bold'}}>
                    {user.name}
                </Typography>
                <Typography variant="body2">{user.description}</Typography>
                <Button style={buttonStyle} variant="contained" size="small"
                        onClick={handleIsFollowing}>
                    {followButtonText}
                </Button>
            </CardContent>
        </Card>
    );
};

export default UserCard;
import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avatarImage from '../../../../images/avatar.png'
import UserContext from "../../../contexts/UserContext";
import './UserBanner.css';

const UserProfileBanner = () => {

    const { user } = useContext(UserContext);

    return (
        <Box className="user-profile-banner-box">
            <Box className="user-profile-banner-box-inner">
                <UserProfileAvatar user={user} />
                <Box className="user-profile-banner-box-inner-absolute">
                    <UserProfileName user={user} />
                    <UserProfileLatestMessage user={user} />
                    <UserProfileAnotherLineOfText userProfile={user} />
                </Box>
            </Box>
        </Box>
    );
};

const UserProfileAvatar = ({ user }) => {
    return (
        <Avatar
            alt={user?.name}
            src={avatarImage}
            className="user-profile-avatar"
        />
    );
};

const UserProfileName = ({ user }) => {
    return (
        <Typography variant="subtitle1" gutterBottom className="user-profile-name">
            {user?.name}
        </Typography>
    );
};

const UserProfileLatestMessage = ({ user }) => {
    return (
        <Typography variant="body2" gutterBottom className="user-profile-latest-message">
            {user?.latestMessage}
        </Typography>
    );
};

const UserProfileAnotherLineOfText = () => {
    return (
        <Typography variant="body2" color="text.secondary" className="user-profile-another-line-of-text">
            Another line of text
        </Typography>
    );
};

export default UserProfileBanner;
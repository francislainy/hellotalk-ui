import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avatarImage from '../../../../images/avatar.png'
import UserContext from "../../../contexts/UserContext";

const UserProfileBanner = () => {

    const { user } = useContext(UserContext);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Box width="100%" height={200} bgcolor="#f0f0f0" position="relative">
                <UserProfileAvatar user={user} />
                <Box position="absolute" bottom={100} left="50%" style={{ transform: 'translateX(-50%)' }}>
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
            sx={{ width: 130, height: 130, border: '2px solid #7B1FA2', position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)' }}
        />
    );
};

const UserProfileName = ({ user }) => {
    return (
        <Typography variant="subtitle1" gutterBottom sx={{ lineHeight: 1.2, color: '#7B1FA2', fontWeight: 'bold', textAlign: 'center', fontSize: '30px' }}>
            {user?.name}
        </Typography>
    );
};

const UserProfileLatestMessage = ({ user }) => {
    return (
        <Typography variant="body2" gutterBottom sx={{ lineHeight: 1.2, color: '#000000DB', fontWeight: 'bold', textAlign: 'center' }}>
            {user?.latestMessage}
        </Typography>
    );
};

const UserProfileAnotherLineOfText = ({ user }) => {
    return (
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.2, color: '#000000DB', fontWeight: 'bold', textAlign: 'center' }}>
            Another line of text
        </Typography>
    );
};

export default UserProfileBanner;


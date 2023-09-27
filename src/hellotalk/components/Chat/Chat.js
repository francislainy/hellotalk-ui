import React, {useState} from 'react';
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, TextField} from '@mui/material';
import avatarImage from '../../../images/avatar.png'
import ChatDetails from "../ChatDetails/ChatDetails";
import colors from "../../../colors/colors";

const ChatInterface = () => {
    // Assuming you have a list of chat data
    const [selectedChat, setSelectedChat] = useState(0); // State to keep track of the selected chat item
    const [newMessage, setNewMessage] = useState(''); // State to keep track of the new message

    const chats = [
        {
            name: 'User 1',
            avatar: 'url_to_avatar_image',
            latestMessage: 'Hello, this is the latest message from user 1',
        },
        {
            name: 'User 2',
            avatar: 'url_to_avatar_image',
            latestMessage: 'Hello, this is user 2',
        },
        {
            name: 'User 3',
            avatar: 'url_to_avatar_image',
            latestMessage: 'Hello, I am user 3',
        },
        // Add more chat data here...
    ];

    const handleChatItemClick = (index) => {
        setSelectedChat(index);
    };

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleNewMessageSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the submission of the new message
        // For example, you can add it to the selected chat's messages
    };

    return (
        <div style={{display: 'flex'}}>
            <List>
                {chats.map((chat, index) => (
                    <ListItem
                        key={index}
                        button
                        selected={selectedChat === index}
                        onClick={() => handleChatItemClick(index)}
                    >
                        <ListItemAvatar>
                            <Avatar alt={chat.name} src={avatarImage} sx={{width: 50, height: 50}}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={chat.name}
                            secondary={chat.latestMessage}
                            sx={{fontSize: '2.5em'}} // increase the font size
                        />
                    </ListItem>
                ))}
            </List>
            <div style={{flex: 2, marginLeft: '60px'}}>
                <ChatDetails chat={chats[selectedChat]}/>
                <form onSubmit={handleNewMessageSubmit} sx={{marginTop: 2}}>
                    <TextField
                        value={newMessage}
                        onChange={handleNewMessageChange}
                        label="New Message"
                        variant="outlined"
                        sx={{width: '75%', marginBottom: 2}}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            marginLeft: 1,
                            backgroundColor: colors.primary,
                            '&:hover': {
                                backgroundColor: colors.darkPurple, // darker shade for hover effect
                            }
                        }}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ChatInterface;
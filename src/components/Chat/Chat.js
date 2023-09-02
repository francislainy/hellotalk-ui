import React, {useState} from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import avatarImage from '../../images/avatar.png'
import ChatDetails from "../ChatDetails/ChatDetails";

const ChatInterface = () => {
    // Assuming you have a list of chat data
    const [selectedChat, setSelectedChat] = useState(0); // State to keep track of the selected chat item

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
            </div>
        </div>
    );
}

export default ChatInterface;
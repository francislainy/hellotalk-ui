import React, {useEffect, useState} from 'react';
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, TextField} from '@mui/material';
import avatarImage from '../../../images/avatar.png'
import ChatDetails from "../ChatDetails/ChatDetails";
import colors from "../../../colors/colors";
import {getChats} from "../../../api/api";
import {USER_ID} from "../../../constants/constants";

const ChatInterface = () => {
    // Assuming you have a list of chat data
    const [selectedChat, setSelectedChat] = useState(0); // State to keep track of the selected chat item
    const [newMessage, setNewMessage] = useState(''); // State to keep track of the new message

    const [chats, setChats] = useState([])

    const fetchChats = async () => {
        try {
            const response = await getChats();
            setChats(response.data);
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

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
                {chats.map((chat, index) => {
                    // Find the participant who is not the current user
                    const otherParticipant = chat.participants.find(participant => participant.id !== USER_ID);
                    return (
                        <ListItem
                            key={index}
                            button
                            selected={selectedChat === index}
                            onClick={() => handleChatItemClick(index)}
                        >
                            <ListItemAvatar>
                                <Avatar src={avatarImage} sx={{width: 50, height: 50}}/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={otherParticipant ? otherParticipant.id : 'Default Value'}
                                secondary={chat.messages[0].content} // Most recent message
                                sx={{fontSize: '2.5em'}} // increase the font size
                            />
                        </ListItem>
                    );
                })}
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
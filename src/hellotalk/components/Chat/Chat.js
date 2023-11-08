import React, {useEffect, useState} from 'react';
import ChatDetails from "../ChatDetails/ChatDetails";
import {getChats} from "../../../api/api";
import AddMessage from "../AddMessage/AddMessage";
import ChatList from "../ChatList/ChatList";

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
            <ChatList
                chats={chats}
                selectedChat={selectedChat}
                handleChatItemClick={handleChatItemClick}
            />
            <div style={{flex: 2, marginLeft: '60px'}}>
                <ChatDetails chat={chats[selectedChat]}/>
                <AddMessage
                    handleNewMessageChange={handleNewMessageChange}
                    newMessage={newMessage}
                    handleNewMessageSubmit={handleNewMessageSubmit}
                />
            </div>
        </div>
    );
}

export default ChatInterface;
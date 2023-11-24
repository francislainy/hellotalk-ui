import React from 'react';
import ChatDetails from "../ChatDetails/ChatDetails";
import AddMessage from "../AddMessage/AddMessage";
import ChatList from "../ChatList/ChatList";
import useChat from "../../hooks/useChat";

const ChatInterface = () => {
    const {
        selectedChat,
        newMessage,
        chats,
        handleChatItemClick,
        handleNewMessageChange,
        handleCreateMessage,
        handleDelete,
    } = useChat('');

    return (
        <div style={{display: 'flex'}}>
            <ChatList
                chats={chats}
                selectedChat={selectedChat}
                handleChatItemClick={handleChatItemClick}
            />
            <div style={{flex: 2, marginLeft: '60px'}}>
                <ChatDetails
                    chat={chats[selectedChat]}
                    handleDelete={handleDelete}
                />
                <AddMessage
                    handleCreateMessage={handleCreateMessage}
                    handleNewMessageChange={handleNewMessageChange}
                    newMessage={newMessage}
                />
            </div>
        </div>
    );
}

export default ChatInterface;


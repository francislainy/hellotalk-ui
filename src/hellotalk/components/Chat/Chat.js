import React from 'react';
import ChatDetails from "../ChatDetails/ChatDetails";
import AddMessage from "../AddMessage/AddMessage";
import ChatList from "../ChatList/ChatList";
import useChat from "../../hooks/useChat";
import ChatContext from "../../contexts/ChatContext";

const ChatInterface = () => {
    const {
        selectedChat,
        newMessage,
        chats,
        handleChatItemClick,
        handleNewMessageChange,
        handleCreateMessage,
        handleDelete,
        handleCloseUpdate,
        handleUpdate,
        updatedContent,
        setUpdatedContent,
    } = useChat('');

    const chat = chats[selectedChat];

    return (
        <ChatContext.Provider value={{
            chat, // Pass the chat object to the ChatContext.Provider
            selectedChat,
            newMessage,
            chats,
            handleChatItemClick,
            handleNewMessageChange,
            handleCreateMessage,
            handleDelete,
            handleCloseUpdate,
            handleUpdate,
            updatedContent,
            setUpdatedContent,
        }}>
        <div style={{display: 'flex'}}>
            <ChatList
                chats={chats}
                selectedChat={selectedChat}
                handleChatItemClick={handleChatItemClick}
            />
            <div style={{flex: 2, marginLeft: '60px'}}>
                <ChatDetails/>
                <AddMessage
                    handleCreateMessage={handleCreateMessage}
                    handleNewMessageChange={handleNewMessageChange}
                    newMessage={newMessage}
                />
            </div>
        </div>
        </ChatContext.Provider>
    );
}

export default ChatInterface;


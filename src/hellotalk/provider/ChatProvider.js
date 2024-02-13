import React from 'react';

import useChat from "../hooks/useChat";
import ChatContext from "../contexts/ChatContext";

const ChatProvider = ({ children }) => {
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
        editingMessageId,
        setEditingMessageId,
        isAnyItemEditing,
        setIsAnyItemEditing,
    } = useChat('');

    const chat = chats[selectedChat];

    return (
        <ChatContext.Provider value={{
            chat,
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
            editingMessageId,
            setEditingMessageId,
            isAnyItemEditing,
            setIsAnyItemEditing,
        }}>
            {children}
        </ChatContext.Provider>
    );
}

export default ChatProvider;

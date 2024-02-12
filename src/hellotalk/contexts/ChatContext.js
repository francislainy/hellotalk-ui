import React from 'react';

const ChatContext = React.createContext({
    selectedChat: null,
    newMessage: '',
    chats: [],
    handleChatItemClick: () => {},
    handleNewMessageChange: () => {},
    handleCreateMessage: () => {},
    handleDelete: () => {},
    handleCloseUpdate: () => {},
    handleUpdate: () => {},
    updatedContent: '',
    setUpdatedContent: () => {},
});
export default ChatContext;
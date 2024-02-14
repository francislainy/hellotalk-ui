import React from 'react';

import useChat from "../hooks/useChat";
import ChatContext from "../contexts/ChatContext";

const ChatProvider = ({ children }) => {
    const chatState = useChat('');

    const chat = chatState.chats[chatState.selectedChat];

    return (
        <ChatContext.Provider value={{...chatState, chat}}>
            {children}
        </ChatContext.Provider>
    );
}

export default ChatProvider;
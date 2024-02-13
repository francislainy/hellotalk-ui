import {List} from "@mui/material";
import React, {useContext} from "react";
import ChatContext from "../../contexts/ChatContext";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = () => {
    const {
        chats, selectedChat, handleChatItemClick
    } = useContext(ChatContext);

    return (
        <List>
            {chats.map((chat, index) => (
                <ChatItem
                    key={index}
                    chat={chat}
                    index={index}
                    selectedChat={selectedChat}
                    handleChatItemClick={handleChatItemClick}
                />
            ))}
        </List>
    );
};

export default ChatList;

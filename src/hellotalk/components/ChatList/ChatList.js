import {List} from "@mui/material";
import React, {useContext} from "react";
import ChatContext from "../../contexts/ChatContext";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = () => {
    const {
        chats
    } = useContext(ChatContext);

    return (
        <List>
            {chats.map((chat, index) => (
                <ChatItem
                    key={index}
                    index={index}
                />
            ))}
        </List>
    );
};

export default ChatList;

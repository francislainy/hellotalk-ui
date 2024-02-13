import React from 'react';
import ChatDetails from "../ChatDetails/ChatDetails";
import AddMessage from "../AddMessage/AddMessage";
import ChatList from "../ChatList/ChatList";
import ChatProvider from "../../provider/ChatProvider";
import './Chat.css';

const Chat = () => {
    return (
        <ChatProvider>
            <div className="chat">
                <ChatList/>
                <div className="chat__right">
                    <ChatDetails/>
                    <AddMessage/>
                </div>
            </div>
        </ChatProvider>
    );
}

export default Chat;


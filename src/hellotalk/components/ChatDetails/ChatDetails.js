import React from 'react';
import ChatItem from '../ChatItem/ChatItem';

const ChatDetails = ({chat}) => {
    return (
        <div>
            {(chat !== undefined && chat.messages.length > 0) && (
                <div>
                    <h2>{chat.messages[0] ? chat.messages[0].userToId : "No messages in chat"}</h2>
                    {chat.messages.map((message, index) => (
                        <ChatItem chat={chat} message={message} index={index} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatDetails;
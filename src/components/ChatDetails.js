import React from 'react';
import ChatItem from './ChatItem';

const ChatDetails = ({ chat }) => {
    const messages = [
        { type: 'message', text: 'Hello!' },
        { type: 'reply', text: 'Hi, how are you?' },
        { type: 'message', text: 'I am good, thanks!' },
        { type: 'reply', text: 'Great to hear!' },
        { type: 'message', text: 'How about you?' },
        { type: 'reply', text: 'I am all good, just killing some time before starting the new term in college. This semester my father wants me to both study and also start helping him with his business. Not sure I can manage this. I think I remember you said your family also required you to work with them while you were still young? Is that correct? Sometimes my memory fails me a bit.' },
    ];

    return (
        <div>
            <h2>{chat.name}</h2>
            {messages.map((message, index) => (
                <ChatItem chat={chat} message={message} index={index} />
            ))}
        </div>
    );
};

export default ChatDetails;
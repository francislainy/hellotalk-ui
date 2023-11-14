import React from 'react';
import ChatItem from '../ChatItem/ChatItem';
import {USER_ID} from "../../../constants/constants";

const ChatDetails = ({chat}) => {
    const otherParticipant = chat !== undefined && chat.participants.find(participant => participant.id !== USER_ID);

    return (
        <div>
            {(chat !== undefined && chat.messages.length > 0) && (
                <div>
                    <h2>{chat.messages[0] ? otherParticipant.name : "No messages in chat"}</h2>
                    {chat.messages.map((message, index) => (
                        <ChatItem chat={chat} message={message} index={index} key={index}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatDetails;
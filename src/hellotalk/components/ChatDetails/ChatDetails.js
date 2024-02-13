import React, {useContext} from 'react';
import MessageItem from '../MessageItem/MessageItem';
import {USER_ID} from "../../../constants/constants";
import ChatContext from '../../contexts/ChatContext';

const ChatDetails = () => {
    const {
        chat,
    } = useContext(ChatContext);

    if (!chat) {
        return <div>No chat selected</div>;
    }

    const otherParticipant = chat.participants.find(participant => participant.id !== USER_ID);

    return (
        <div>
            {(chat.messages.length > 0) && (
                <div>
                    <h2>{chat.messages[0] ? otherParticipant.name : "No messages in chat"}</h2>
                    {chat.messages.map((message, index) => (
                        <MessageItem message={message} index={index}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatDetails;
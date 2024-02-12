import React from 'react';
import ChatItem from '../ChatItem/ChatItem';
import {USER_ID} from "../../../constants/constants";
import useChat from "../../hooks/useChat";

const ChatDetails = ({
                         chat, handleDelete,
                         handleUpdate,
                         updatedContent,
                         setUpdatedContent,
                     }) => {
    const otherParticipant = chat !== undefined && chat.participants.find(participant => participant.id !== USER_ID);

    const {editingMessageId, setEditingMessageId, isAnyItemEditing, setIsAnyItemEditing} = useChat('');

    return (
        <div>
            {(chat !== undefined && chat.messages.length > 0) && (
                <div>
                    <h2>{chat.messages[0] ? otherParticipant.name : "No messages in chat"}</h2>
                    {chat.messages.map((message, index) => (
                        <ChatItem
                            message={message}
                            handleDelete={() => handleDelete(message.id)}
                            index={index}
                            key={index}
                            editingMessageId={editingMessageId}
                            setEditingMessageId={setEditingMessageId}
                            isAnyItemEditing={isAnyItemEditing}
                            setIsAnyItemEditing={setIsAnyItemEditing}
                            handleUpdate={handleUpdate}
                            updatedContent={updatedContent}
                            setUpdatedContent={setUpdatedContent}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatDetails;
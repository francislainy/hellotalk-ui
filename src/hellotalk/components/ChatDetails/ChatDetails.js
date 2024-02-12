import React, {useContext} from 'react';
import ChatItem from '../ChatItem/ChatItem';
import {USER_ID} from "../../../constants/constants";
import useChat from "../../hooks/useChat";
import ChatContext from '../../contexts/ChatContext';

const ChatDetails = () => {
    const {
        chat,
        handleDelete,
        handleUpdate,
        updatedContent,
        setUpdatedContent,
    } = useContext(ChatContext);

    const {editingMessageId, setEditingMessageId, isAnyItemEditing, setIsAnyItemEditing} = useChat('');

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
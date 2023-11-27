import {useEffect, useState} from 'react';
import {createMessage, deleteMessage, getChats, updateMessage} from "../../api/api";
import {USER_ID} from "../../constants/constants";

const useChat = (message) => {
    const [selectedChat, setSelectedChat] = useState(0);
    const [newMessage, setNewMessage] = useState('');
    const [chats, setChats] = useState([])

    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdatedContent] = useState(message.content);
    const [isAnyItemEditing, setIsAnyItemEditing] = useState(false);

    const fetchChats = async () => {
        try {
            const response = await getChats();
            setChats(response.data);
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        setUpdatedContent(message.content);
    }, [message.content]);

    useEffect(() => {
        fetchChats();
    }, []);

    const handleChatItemClick = (index) => {
        setSelectedChat(index);
    };

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleCreateMessage = () => {
        const otherParticipant = chats[selectedChat] !== undefined
            && chats[selectedChat].participants.find(participant => participant.id !== USER_ID);

        const message = {
            content: newMessage,
            userToId: otherParticipant.id
        }

        createMessage(message)
            .then(response => {
                setNewMessage('')
                fetchChats();
            })
            .catch(error => {
                alert(error)
            });
    };

    const handleDelete = async (messageId) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            await deleteMessage(messageId);
            await fetchChats();
        }
    };

    const handleUpdate = async (messageId, updatedContent) => {
        await updateMessage(messageId, updatedContent)
        setIsEditing(!isEditing);
        await fetchChats();
    };

    const handleCloseUpdate = () => {
        setIsEditing(!isEditing);
    };

    return {
        selectedChat,
        newMessage,
        chats,
        isEditing,
        setIsEditing,
        isAnyItemEditing,
        setIsAnyItemEditing,
        updatedContent,
        setUpdatedContent,
        handleChatItemClick,
        handleNewMessageChange,
        handleCreateMessage,
        handleDelete,
        handleCloseUpdate,
        handleUpdate,
    }
}

export default useChat;


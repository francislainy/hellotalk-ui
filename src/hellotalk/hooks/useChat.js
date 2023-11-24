import {useEffect, useState} from 'react';
import {createMessage, deleteMessage, getChats} from "../../api/api";
import {USER_ID} from "../../constants/constants";

const useChat = () => {
    const [selectedChat, setSelectedChat] = useState(0);
    const [newMessage, setNewMessage] = useState('');
    const [chats, setChats] = useState([])

    const fetchChats = async () => {
        try {
            const response = await getChats();
            setChats(response.data);
        } catch (error) {
            alert(error)
        }
    };

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

    return {
        selectedChat,
        newMessage,
        chats,
        handleChatItemClick,
        handleNewMessageChange,
        handleCreateMessage,
        handleDelete
    }
}

export default useChat;


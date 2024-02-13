import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {USER_ID} from "../../../constants/constants";
import avatarImage from "../../../images/avatar.png";
import React, {useContext} from "react";
import ChatContext from "../../contexts/ChatContext";

const ChatList = () => {
    const {
        chats, selectedChat, handleChatItemClick
    } = useContext(ChatContext)

    return (
        <List>
            {chats.map((chat, index) => {
                // Find the participant who is not the current user
                const otherParticipant = chat.participants.find(participant => participant.id !== USER_ID);
                return (
                    <ListItem
                        key={index}
                        button
                        selected={selectedChat === index}
                        onClick={() => handleChatItemClick(index)}
                    >
                        <ListItemAvatar>
                            <Avatar src={avatarImage} sx={{width: 50, height: 50}}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={otherParticipant ? otherParticipant.name : 'Default Value'}
                            secondary={chat.messages[chat.messages.length-1].content} // Most recent message
                            sx={{fontSize: '2.5em'}} // increase the font size
                        />
                    </ListItem>
                );
            })}
        </List>
    )
}

export default ChatList;
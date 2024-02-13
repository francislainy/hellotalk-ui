import {Button, TextField} from "@mui/material";
import React, {useContext} from "react";
import ChatContext from "../../contexts/ChatContext";
import './AddMessage.css';

const AddMessage = () => {
    const {
        handleCreateMessage,
        handleNewMessageChange,
        newMessage,
    } = useContext(ChatContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateMessage();
    };

    return (
        <form onSubmit={handleSubmit} className="add-message-form">
            <TextField
                value={newMessage}
                onChange={handleNewMessageChange}
                label="New Message"
                variant="outlined"
                className="new-message-field"
            />
            <Button
                type="submit"
                variant="contained"
                className="send-button"
            >
                Send
            </Button>
        </form>
    )
}

export default AddMessage;

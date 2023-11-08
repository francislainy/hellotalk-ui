import {Button, TextField} from "@mui/material";
import colors from "../../../colors/colors";
import React from "react";

const AddMessage = ({handleCreateMessage, handleNewMessageChange, newMessage, handleNewMessageSubmit}) => {
    return (<form onSubmit={handleNewMessageSubmit} sx={{marginTop: 2}}>
            <TextField
                value={newMessage}
                onChange={handleNewMessageChange}
                label="New Message"
                variant="outlined"
                sx={{width: '75%', marginBottom: 2}}
            />
            <Button onClick={() => handleCreateMessage()}
                type="submit"
                variant="contained"
                sx={{
                    marginLeft: 1,
                    backgroundColor: colors.primary,
                    '&:hover': {
                        backgroundColor: colors.darkPurple, // darker shade for hover effect
                    }
                }}
            >
                Send
            </Button>
        </form>
    )
}

export default AddMessage;
import React from 'react';
import ChatScreen from "../components/ChatScreen/ChatScreen";
import {TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HomeScreen = () => {
    return (
        <div style={{margin: '20px',}}>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="See who is online"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                    sx: {borderRadius: '20px'},
                }}
            />
            <ChatScreen/>
        </div>
    );
}

export default HomeScreen;

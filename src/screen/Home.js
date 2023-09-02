import React from 'react';
import ChatInterface from "../components/Chat/Chat";
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    return (
        <div style={{marginLeft: '20px', marginRight: '20px', }}>
            <h1>Home</h1>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="See who is online"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    sx: { borderRadius: '20px' },
                }}
            />
            <ChatInterface />
        </div>
    );
}

export default Home;

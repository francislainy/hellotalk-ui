import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    return (
        <div>
            <h1>Welcome to My App</h1>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}>
                         <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </div >
    );
}

export default Home;

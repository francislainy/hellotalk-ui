import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

const CustomAppBar = () => {
    return (
        <AppBar position="static" style={{background: '#7B1FA2'}}>
            <Toolbar>
                <Typography variant="h6" style={{flexGrow: 1}}>
                    <RouterLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        Hello Talk
                    </RouterLink>
                </Typography>
                <Button color="inherit" component={RouterLink} to="/moments">Moments</Button>
                <Button color="inherit" component={RouterLink} to="/connect">Connect</Button>
                <Button color="inherit" component={RouterLink} to="/live">Live</Button>
                <Button color="inherit" component={RouterLink} to="/me">Me</Button>
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;
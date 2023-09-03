import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../screen/HomeScreen';
import Connect from '../screen/ConnectScreen';
import Live from '../screen/LiveScreen';
import Me from '../screen/MeScreen';
import Moments from '../screen/MomentsScreen';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <Router>
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

            <Routes>
                <Route path="/moments" element={<Moments/>}/>
                <Route path="/connect" element={<Connect/>}/>
                <Route path="/live" element={<Live/>}/>
                <Route path="/me" element={<Me/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default Navigation;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../screen/Home';
import Connect from '../screen/Connect';
import Live from '../screen/Live';
import Me from '../screen/Me';
import Moments from '../screen/Moments';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Router>
      <AppBar position="static" style={{ background: '#9C27B0' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Hello Talk
            </RouterLink>          </Typography>
          <Button color="inherit" component={RouterLink} to="/moments">Moments</Button>
          <Button color="inherit" component={RouterLink} to="/connect">Connect</Button>
          <Button color="inherit" component={RouterLink} to="/live">Live</Button>
          <Button color="inherit" component={RouterLink} to="/me">Me</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/moments" element={<Moments />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/live" element={<Live />} />
        <Route path="/me" element={<Me />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
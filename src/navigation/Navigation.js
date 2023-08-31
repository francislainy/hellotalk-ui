import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Connect from '../components/Connect';
import Live from '../components/Live';
import Me from '../components/Me';
import Moments from '../components/Live';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Router>
      <AppBar position="static" style={{ background: '#9C27B0' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">Hello Talk</Button>
          <Button color="inherit" component={RouterLink} to="/moments">Moment</Button>
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
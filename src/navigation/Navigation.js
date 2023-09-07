import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MomentDetail from '../components/MomentDetail';
import Home from '../screen/HomeScreen';
import Connect from '../screen/ConnectScreen';
import Live from '../screen/LiveScreen';
import Me from '../screen/MeScreen';
import Moments from '../screen/MomentsScreen';
import CustomAppBar from "../components/AppBar";

const Navigation = () => {
    return (
        <Router>
            <CustomAppBar />
            <Routes>
                <Route path="/moments" element={<Moments/>}/>
                <Route path="/connect" element={<Connect/>}/>
                <Route path="/live" element={<Live/>}/>
                <Route path="/me" element={<Me/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/moment-detail/:id" element={<MomentDetail />} />
            </Routes>
        </Router>
    );
}

export default Navigation;

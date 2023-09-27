import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MomentDetail from '../f_moments/components/Moments/MomentDetail';
import HomeScreen from '../f_hellotalk/screens/HomeScreen';
import ConnectScreen from '../f_connect/screens/ConnectScreen';
import LiveScreen from '../f_live/screens/LiveScreen';
import MeScreen from '../f_me/screens/MeScreen';
import MomentsScreen from '../f_moments/screens/MomentsScreen';
import CustomAppBar from "../AppBar";
import AddMoment from "../f_moments/components/Moments/AddMoment";
import UserDetail from "../f_me/components/User/UserDetail";

const Navigation = () => {
    return (
        <Router>
            <CustomAppBar />
            <Routes>
                <Route path="/moments" element={<MomentsScreen/>}/>
                <Route path="/connect" element={<ConnectScreen/>}/>
                <Route path="/live" element={<LiveScreen/>}/>
                <Route path="/me" element={<MeScreen/>}/>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/moment-detail/:id" element={<MomentDetail />} />
                <Route path="/moments/add" element={<AddMoment />} />
                <Route path="/users/:id" element={<UserDetail />} />
            </Routes>
        </Router>
    );
}

export default Navigation;

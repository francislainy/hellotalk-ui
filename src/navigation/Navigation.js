import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MomentDetail from '../components/Moments/MomentDetail';
import HomeScreen from '../screen/HomeScreen';
import ConnectScreen from '../screen/ConnectScreen';
import LiveScreen from '../screen/LiveScreen';
import MeScreen from '../screen/MeScreen';
import MomentsScreen from '../screen/MomentsScreen';
import CustomAppBar from "../components/AppBar";
import AddMoment from "../components/Moments/AddMoment";
import UserDetail from "../components/User/UserDetail";

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

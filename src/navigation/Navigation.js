import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MomentDetailScreen from '../moments/screens/MomentDetailScreen/MomentDetailScreen';
import HomeScreen from '../hellotalk/screens/HomeScreen';
import ConnectScreen from '../connect/screens/ConnectScreen';
import LiveScreen from '../live/screens/LiveScreen';
// import MeScreen from '../me/screens/MeScreen'; //todo: fix this - it's causing a loop - 14/02/2024
import MeScreen from '../me/screens/MeScreen';
import MomentsScreen from '../moments/screens/MomentScreen/MomentsScreen';
import CustomAppBar from "../AppBar";
import AddMoment from "../moments/components/momentMain/AddMoment/AddMoment";
import UserDetailScreen from "../me/screens/UserDetailScreen";

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
                <Route path="/moment-detail/:id" element={<MomentDetailScreen />} />
                <Route path="/moments/add" element={<AddMoment />} />
                <Route path="/users/:id" element={<UserDetailScreen />} />
            </Routes>
        </Router>
    );
}

export default Navigation;

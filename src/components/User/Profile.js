import React from 'react';
import SelfIntroduction from "./SelfIntroduction";
import UserInfo from "./UserInfo";

const Profile = () => {

    return (
        <>
            <SelfIntroduction/>
            <UserInfo sectionHeader={'Interest & Hobbies'} list={['item1', 'item2', 'item3']}/>
            <UserInfo sectionHeader={'Places I want to go'} list={['place1', 'place2', 'place3']}/>
            <UserInfo sectionHeader={'My Occupation'} list={['occupation1', 'occupation2', 'occupation3']}/>
            <UserInfo sectionHeader={'My Hometown'} list={['hometown1', 'hometown2', 'hometown3']}/>
            <UserInfo sectionHeader={'My School'} list={['school1', 'school2', 'school3']}/>
            <h2>Age</h2>
        </>
    );
}

export default Profile;
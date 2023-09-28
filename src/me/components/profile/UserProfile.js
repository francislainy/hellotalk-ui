import React from 'react';
import SelfIntroduction from "./SelfIntroduction";
import UserInfo from "./UserInfo";

const UserProfile = ({userInfo}) => {
    return (
        <>
            <SelfIntroduction selfIntroduction={userInfo.selfIntroduction}/>
            <UserInfo sectionHeader={'My Hometown'} list={userInfo.hometown}/>
            <UserInfo sectionHeader={'My Occupation'} list={userInfo.occupation}/>
            <UserInfo sectionHeader={'Interest & Hobbies'} list={userInfo.interests}/>
            <UserInfo sectionHeader={'Places I want to go'} list={userInfo.placesToVisit}/>
        </>
    );
}

export default UserProfile;
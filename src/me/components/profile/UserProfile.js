import React from 'react';
import SelfIntroduction from "./SelfIntroduction";
import UserInfo from "./UserInfo";

const UserProfile = ({userInfo}) => {
    return (
        <>
            <SelfIntroduction selfIntroduction={userInfo.selfIntroduction}/>
            <UserInfo sectionHeader={'My Hometown'} list={userInfo.hometown}/>
            <UserInfo sectionHeader={'My Occupation'} list={userInfo.occupation}/>
            {/*todo: find out why this fails on second and other items, even though it's also empty for first item - 14/11/2023*/}
            {/*<UserInfo sectionHeader={'Interest & Hobbies'} list={userInfo.interests}/>*/}
            <UserInfo sectionHeader={'Places I want to go'} list={userInfo.placesToVisit}/>
        </>
    );
}

export default UserProfile;
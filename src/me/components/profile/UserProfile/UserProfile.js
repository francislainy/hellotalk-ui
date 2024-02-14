import React from 'react';
import SelfIntroduction from "../SelfIntroduction/SelfIntroduction";
import UserInfo from "../UserInfo/UserInfo";

const UserProfile = ({user}) => {
    return (
        <>
            <SelfIntroduction selfIntroduction={user.selfIntroduction}/>
            <UserInfo sectionHeader={'My Hometown'} list={user.hometown}/>
            <UserInfo sectionHeader={'My Occupation'} list={user.occupation}/>
            <UserInfo sectionHeader={'Interest & Hobbies'} list={user.hobbyAndInterests}/>
            <UserInfo sectionHeader={'Places I want to go'} list={user.placesToVisit}/>
        </>
    );
}

export default UserProfile;
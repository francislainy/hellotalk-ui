import React, {useEffect, useState} from 'react';
import SelfIntroduction from "./SelfIntroduction";
import UserInfo from "./UserInfo";
import {getUser} from "../../api/api";
import {USER_ID} from "../constants";

const Profile = () => {

    const [userInfo, setUserInfo] = useState()
    const fetchUser = async () => {
        try {
            const response = await getUser(USER_ID);
            const data = response.data;

            // Assuming hobbyAndInterests is an array of strings
            const interests = data.hobbyAndInterests || [];

            const placesToVisit = data.placesToVisit ? [data.placesToVisit] : [];

            const occupation = data.occupation ? [data.occupation] : [];

            const hometown = data.hometown ? [data.hometown.city, data.hometown.country] : [];

            const school = data.school ? [data.school] : [];

            setUserInfo({
                interests,
                placesToVisit,
                occupation,
                hometown,
                school
            });
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            {userInfo !== undefined &&
                <>
                    <SelfIntroduction/>
                    <UserInfo sectionHeader={'Interest & Hobbies'} list={userInfo.interests}/>
                    <UserInfo sectionHeader={'Places I want to go'} list={userInfo.placesToVisit}/>
                    <UserInfo sectionHeader={'My Occupation'} list={userInfo.occupation}/>
                    <UserInfo sectionHeader={'My Hometown'} list={userInfo.hometown}/>
                    <UserInfo sectionHeader={'My School'} list={userInfo.school}/>
                    <h2>Age</h2>
                </>
            }
        </>
    );
}

export default Profile;
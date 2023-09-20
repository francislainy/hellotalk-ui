import React from 'react'
import ListTabsUserInfo from "./ListTabsUserInfo";

const UserInfo = ({sectionHeader, list}) => {
    return <>
        <h2>{sectionHeader}</h2>
        <ListTabsUserInfo list={list}/>
    </>
}

export default UserInfo;
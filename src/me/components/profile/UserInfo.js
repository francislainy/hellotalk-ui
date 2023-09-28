import React from 'react'
import UserChipList from "./UserChipList";

const UserInfo = ({sectionHeader, list}) => {
    return <>
        <h2>{sectionHeader}</h2>
        <UserChipList list={list}/>
    </>
}

export default UserInfo;
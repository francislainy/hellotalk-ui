import React from 'react';
import UserItem from '../UserItem/UserItem';
import {USER_ID} from "../../../../constants/constants";
import {useUserList} from "../../../hooks/useUserList";

const UserList = () => {
    const {users, followships, getFollowships, handleCreateFollowship, handleDeleteFollowship} = useUserList();

    return (
        <div>
            {users
                .filter(user => user.id !== USER_ID)
                .map(user => (
                    <UserItem key={user.id}
                              user={user}
                              handleCreateFollowship={(userToId) => handleCreateFollowship(userToId).then(getFollowships)}
                              handleDeleteFollowship={(followshipId) => handleDeleteFollowship(followshipId).then(getFollowships)}
                              followships={followships}
                    />
                ))}
        </div>
    );
};

export default UserList;
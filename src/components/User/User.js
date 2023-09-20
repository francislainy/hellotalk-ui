import React, {useState} from 'react';
import UserBanner from "./UserBanner";
import Profile from "../UnderConstruction";
import Moments from "../Moments/Moments";
import UserTabs from "./UserTabs";

const User = () => {
    const user = {
        name: 'User 1',
        avatar: 'url_to_avatar_image',
        latestMessage: 'Hello, this is the latest message from user 1',
    };

    const [component, setComponent] = useState(null);

    const loadComponent = (componentName) => {
        switch (componentName) {
            case 'profile':
                setComponent(<Profile/>);
                break;
            case 'moments':
                setComponent(<Moments/>);
                break;
            default:
                setComponent(null);
        }
    }

    return (
        <>
            <UserBanner user={user}/>
            <UserTabs loadComponent={loadComponent}/>
            {component}
        </>
    );
}

export default User;
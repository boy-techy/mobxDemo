import React from "react";
import {observer} from "mobx-react";

const Profile = observer(({user}) => {

    if(!user) {
        return null;
    }
    return(
        <div>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.website}</span>
        </div>
    )
});

export default Profile;

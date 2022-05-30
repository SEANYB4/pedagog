import React from "react";
import { useParams } from 'react-router-dom';

function Profile() {

    let { username } = useParams();

    return (
        <div>
            THIS IS {username} 'S PAGE!!
            <h2>Profile</h2>
        </div>
        
    )
}



export default Profile;
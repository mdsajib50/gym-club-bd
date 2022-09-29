import './Profile.css';

import React from 'react';

const Profile = () => {
    return (
        <div>
            <div>
            <img src="" alt="" srcset=""/>
            <h4>MD.Nurul Alam Siddiki</h4>
            <p>Chandpur, Bangladesh</p>
            </div>
            <div className='bg-info p-2 rounded'>
                <h5>Height: <small>5.6 inch</small></h5>
                <h5>Age: <small>31</small> years</h5>
            </div>
        </div>
    );
};

export default Profile;
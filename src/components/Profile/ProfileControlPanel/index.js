import React from 'react';
import ProfileHeader from './../ProfileHeader';
import ProfileSearchBar from './../ProfileSearchBar';
import ProfileDisplayBar from './../ProfileDisplayBar';
import ProfileNavBar from './../ProfileNavBar';

const ProfileControlPanel = () => {
    return(
        <div>
            <ProfileHeader/>
            <ProfileSearchBar/>
            <ProfileDisplayBar/>
            <ProfileNavBar/>
        </div>
    );
};

export default ProfileControlPanel;

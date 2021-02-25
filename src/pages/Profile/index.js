import React, { Component } from 'react';
import './styles.scss';

//Componenets
import ProfileHeader from './../../components/ProfileHeader';
import ProfileNavBar from '../../components/ProfileNavBar';

const Profile = () => {
    return (
        <div className="profile">
            <div className="main">
                <ProfileHeader/>
                <ProfileNavBar/>
            </div>
                
        </div>
    );
};

export default Profile;

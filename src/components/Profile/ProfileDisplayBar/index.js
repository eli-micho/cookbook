import React from 'react';
import './styles.scss';

const ProfileDisplayBar = () => {
    return (
        <div className="displayBar">
            <div className="userInfo">
                <span className="userIcon">E</span>
                <div className="userDisplayInfo">
                    <span>DisplayName</span>
                    <ul>
                        <li><i className="fas fa-user-friends"></i> 0</li>
                        <li><i className="fas fa-heart"></i> 0</li>
                        <li><i className="fas fa-utensils"></i> 0</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileDisplayBar;

import React from 'react';
import './styles.scss';

const JoinNowMenu = () => {
    return (
        <div className="dropDownContent">
            <span>Account</span>
            <ul>
                <li><a>Create a Profile</a></li>
                <li><a>Newsletters</a></li>
                <li><a>Help</a></li>
            </ul>

            <span>More</span>
            <ul>
                <li><a>Shopping List</a></li>
                <li><a>Cooking School</a></li>
                <li><a>Ask the Community</a></li>
            </ul>
        </div>
    );
};

export default JoinNowMenu;



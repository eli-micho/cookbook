import React from 'react';
import './styles.scss';

const JoinNowMenu = () => {
    return (
        <div className="dropDownContent">
            <span className="dropDownSubheader">Account</span>
            <ul className="dropDownList">
                <li><a>Create a Profile</a></li>
                <li><a>Newsletters</a></li>
                <li><a>Help</a></li>
            </ul>

            <span className="dropDownSubheader">More</span>
            <ul className="dropDownList">
                <li><a>Shopping List</a></li>
                <li><a>Cooking School</a></li>
                <li><a>Ask the Community</a></li>
            </ul>
        </div>
    );
};

export default JoinNowMenu;



import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const ProfileNavBar = () => {
    return (
        <nav className="profileNavBar">
            <ul className="subNav">

                <li><Link to="/profile/about-me">About Me</Link></li>
                <li><Link to="/profile/favourites">Favourites</Link></li>
                <li><Link to="/profile/friends">Friends</Link></li>
                <li><Link to="/profile/made-it">I Made It</Link></li>
                <li><Link to="/profile/my-photos">My Photos</Link></li>
                <li><Link to="/profile/my-reviews">My Reviews</Link></li>
                <li><Link to="/profile/my-recipes">Personal Recipes</Link></li>
            </ul>
        </nav>
    );
};

export default ProfileNavBar;

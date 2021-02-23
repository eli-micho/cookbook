import React from 'react';
import JoinNowMenu from './JoinNowMenu';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
    return(
        <header className="header">
            <div className="subheader">
                <div className="explore">
                    <a>
                        <i className="fa fa-bars"></i>
                        <span>Explore</span>
                    </a>
                </div>

                <div className="logo">
                    <a href="#">
                        <span>justrecipes</span>
                        <i className="fas fa-utensils"></i>
                    </a>
                </div>

                <div className="search">
                    <label htmlFor="search">Search </label>
                    <input type="text" id="search" name="search" placeholder="Find a Recipe" />
                    <button><i class="fa fa-search"></i></button>
                </div>

                <div className="userCTA">
                    <a href="#" className="joinNowCTA">
                        <i className="fa fa-user"></i>
                        <span>Join Now</span>
                        <JoinNowMenu />
                    </a>

                    <Link to="/">
                        <span>Login</span>
                    </Link>
                </div>
            </div>
            
        </header>
    );
};

export default Header;

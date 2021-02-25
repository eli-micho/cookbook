import React from 'react';
import JoinNowMenu from './JoinNowMenu';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';
import './styles.scss';

const Header = (props) => {
    const { currentUser } = props;

    const toggleDropDown = () => {
        const dropdown = document.querySelector('.dropDownContent');
        dropdown.classList.toggle('show');
        
    };

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
                    <button><i className="fa fa-search"></i></button>
                </div>

                <div className="userCTA">
                    {currentUser && (
                        <div className="currentUserCTA">
                            <Link to="/profile">
                                <span>{currentUser.displayName}</span>
                            </Link>
                            <span onClick={() => auth.signOut()}>Log Out</span>
                        </div>
                    )}
                    
                    {!currentUser && (
                        <div>
                            <span className="joinNowCTA">
                            <i className="fa fa-user"></i>
                            <Link to="/signup">
                                <span className="joinBtn">Join Now</span>
                            </Link>
                            </span>

                            <Link to="/signin">
                                <span>Login</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;

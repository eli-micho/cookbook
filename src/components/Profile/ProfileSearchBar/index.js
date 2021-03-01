import React, { Component } from 'react';
import AccountInput from '../../Forms/AccountInput';
import './styles.scss';

class ProfileSearchBar extends Component {
    constructor(props){
        super(props)
        
    };

    render(){
        return(
            <div className="profileSearchBar">
                <span className="logo">justrecipes<i className="fa fa-utensils"></i></span>
                <span className="browse">Browse <i className="fas fa-chevron-down"></i></span>

                <div className="searchBox">
                    <input type="text" name="searchInput" placeholder="Find a recipe" />
                    <span className="ingredientSearch">Ingredient Search</span>
                    <span className="searchIcon"><i className="fas fa-search"></i></span>
                </div>
                
                <div className="userActions">
                    <ul>
                        <li><i className="fas fa-bell"></i></li>
                        <li><i className="fas fa-heart"></i></li>
                    </ul>
                </div>

                <div className="userProfileBtn">
                    <span className="userIcon">Icon</span>
                    <span>Display Name</span>
                    <span className="moreBtn"><i className="fa fa-chevron-down"></i></span>
                </div>
            </div>
        )
    };
};

export default ProfileSearchBar;

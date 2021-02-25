import React, { Component } from 'react';
import AccountInput from '../Forms/AccountInput';
import './styles.scss';

class ProfileNavBar extends Component {
    constructor(props){
        super(props)
        
    };

    render(){
        return(
            <div className="profileNavBar">
                <span className="logo">justrecipes<i className="fa fa-utensils"></i></span>
                <span className="browse">Browse <i class="fas fa-chevron-down"></i></span>

                <div className="searchBox">
                    <input type="text" name="searchInput" placeholder="Find a recipe" />
                    <i class="fas fa-search"></i>
                </div>
                
                <div>
                    <ul>
                        <li><i class="fas fa-bell"></i></li>
                        <li><i class="fas fa-heart"></i></li>
                    </ul>
                </div>

                <div>
                    <span className="userIcon">Icon</span>
                    <span>Display Name</span>
                    <span></span>
                </div>
            </div>
        )
    };
};

export default ProfileNavBar;

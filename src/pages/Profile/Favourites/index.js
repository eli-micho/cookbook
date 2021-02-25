import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const Favourites = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="wrap">
                <div className="favouritesNav">
                    <div className="collections">
                        <span>Collections</span>
                        <span>Recipes</span>
                    </div>
                    
                    <div className="favouritesSearch">
                        <input type="text" name="savedRecipe" placeholder="Find a saved recipe"/>
                        <button><i className="fa fa-search"></i></button> 
                    </div>
                    
                    <div className="sort">
                        <span>Sort by: </span>
                        <button>Newest <i className="fa fa-chevron-down"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favourites;


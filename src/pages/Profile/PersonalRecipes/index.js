import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const PersonalRecipes = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="wrap">
                <div className="textContent">
                    <h3>You don't have any personal recipes yet.</h3>
                    <span>Share your own culinary creations! Add a recipe.</span>
                </div>
            </div>
        </div>
    );
};

export default PersonalRecipes;


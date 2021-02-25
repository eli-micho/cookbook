import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const PersonalRecipes = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="aboutMe">
                Personal Recipes
            </div>
        </div>
    );
};

export default PersonalRecipes;


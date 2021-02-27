import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const MadeIt = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="wrap">
                <div className="textContent">
                    <h3>Keep track of what you've made</h3>
                    <span>When you finish a recipe, be sure to click "I made it!" below the directions.</span>
                </div>
            </div>
        </div>
    );
};

export default MadeIt;


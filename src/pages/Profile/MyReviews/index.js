import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const MyReviews= () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="wrap">
                <div className="textContent">
                    <h3>Keep track of your reviews and ratings!</h3>
                    <span>When you finish a recipe, be sure to rate and review it!</span>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;


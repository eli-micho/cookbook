import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const MyReviews= () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="aboutMe">
                My Reviews
            </div>
        </div>
    );
};

export default MyReviews;


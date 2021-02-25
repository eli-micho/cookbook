import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const Friends = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="aboutMe">
                Friends
            </div>
        </div>
    );
};

export default Friends;


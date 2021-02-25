import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const MadeIt = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="aboutMe">
                Made by Me
            </div>
        </div>
    );
};

export default MadeIt;


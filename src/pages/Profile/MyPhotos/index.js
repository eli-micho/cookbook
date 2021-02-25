import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const MyPhotos = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="aboutMe">
                My Photos
            </div>
        </div>
    );
};

export default MyPhotos;


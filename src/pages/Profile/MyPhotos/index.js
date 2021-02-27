import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const MyPhotos = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="wrap">
                <div className="photos">
                    <div className="addPhotoButton">
                        <div>
                            <span className="addBtn"><i class="fas fa-plus"></i></span>
                            <span>Add a photo</span>
                        </div>
                    </div>

                    <div className="photosContainer">
                        <div className="img">
                            E
                        </div>

                        <div className="photoDescription">
                            <span className="addBtn"><i class="fas fa-plus"></i></span>
                            <span>Description</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPhotos;


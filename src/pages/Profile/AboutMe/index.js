import React from 'react';
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const AboutMe = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="wrap">
                <div className="aboutMeActions">
                    <ul>
                        <li>
                            <span>About Me</span>
                            <a>Tell us about yourself</a>
                        </li>

                        <li>
                            <span>My Location</span>
                            <a>Add your location</a>
                        </li>

                        <li>
                            <span>Connect with me</span>
                            <a>Share your justrecipes profile</a>
                        </li>
                    </ul>
                </div>
                

                <button className="profileBtn">
                    Edit public profile
                </button>
            </div>
        </div>
    );
};

export default AboutMe;


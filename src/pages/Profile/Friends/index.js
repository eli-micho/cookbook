import React from 'react';
import rachel from './../../../assets/imgs/rachel.jpg'
import './styles.scss';

//Components
import ProfileControlPanel from '../../../components/Profile/ProfileControlPanel';

const Friends = () => {
    return(
        <div>
            <ProfileControlPanel/>
            <div className="wrap">
                <div className="friendsNav">
                    <ul>
                        <li>Following 0</li>
                        <li>Followers 0</li>
                        <li>Find Friends</li>
                    </ul>
                </div>

                <div className="suggestedContent">
                    <span>Suggested Cooks to Follow</span>
                    <ul>
                        <li>
                            <div>
                                <img src={rachel}/>
                                <div className="contentTitle">
                                    <span>Rachel Ray Every Day</span>
                                    <button>Follow</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="facebookConnect">
                    <div className="facebookText">
                        <h4>Facebook friends on Allrecipes</h4>
                        <span>Sign in to Facebook to automatically connect with your friends.</span>
                    </div>

                    <button>Connect to Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Friends;


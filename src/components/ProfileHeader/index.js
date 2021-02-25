import React from 'react';
import './styles.scss';

const ProfileHeader = () => {
    return(
        <section className="profileHeader">
            <div className="socialMedia">
                <ul>
                    <li><span>Follow us on: </span></li>
                    <li><a><i className="fa fa-facebook"></i></a></li>
                    <li><a><i className="fa fa-instagram"></i></a></li>
                    <li><a><i className="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </section>
    );
};

export default ProfileHeader;

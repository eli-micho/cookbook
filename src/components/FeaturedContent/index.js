import React from 'react';
import featuredContentTypes from './../../helpers/featuredcontent.types';
import LeftFContent from './LeftFContent';
import MainFContent from './MainFContent';
import RightFContent from './RightFContent';
import './styles.scss';

const FeaturedContent = () => {
    return (
        <div className="featuredContent">
            <div className="subMainContent">
                <LeftFContent content={featuredContentTypes}/>

                <MainFContent content={featuredContentTypes}/>

                <RightFContent content={featuredContentTypes}/>
            </div>
        </div>
    );
};

export default FeaturedContent;

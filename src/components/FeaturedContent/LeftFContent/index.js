import React from 'react';
import featuredContentTypes from './../../../helpers/featuredcontent.types';
import './styles.scss';

const LeftFContent = (props) => {
    return (
        <div className="leftFContent">
            <div className="article ">
                <a href="#"><img src={props.content[0][0].img} /></a>
                <a href="#"><span>{props.content[0][0].title}</span></a>
            </div>

            <div className="article"> 
                <a href="#"><img src={props.content[0][1].img} /></a>
                <a href="#"><span>{props.content[0][1].title}</span></a>
            </div>
        </div>
    );
};

export default LeftFContent;

import React from 'react';
import featuredContentTypes from './../../../helpers/featuredcontent.types';
import './styles.scss';

const MainFContent = (props) => {
    return (
        <div className="mainFContent">
            <a href="#"><img src={props.content[1].img}/></a>
            <div className="mainFContentText">
                <a href="#"><h2>{props.content[1].title}</h2></a>
                <p>{props.content[1].text}</p>
            </div>
        </div>
    );
};

export default MainFContent;

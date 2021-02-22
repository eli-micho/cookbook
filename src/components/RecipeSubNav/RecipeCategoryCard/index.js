import React from 'react';
import './styles.scss';

const RecipeCategoryCard = (props) => {
    return (
        <li className="categoryCard">
            <a className="categoryLink">
                <img src={props.category.img}/>
                <span>{props.category.name}</span>
            </a>
        </li>
            
    );
};

export default RecipeCategoryCard;

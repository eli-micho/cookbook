import React from 'react';
import './styles.scss';

const RightFContent = (props) => {
    const content = props.content[2]

    const renderContent =
        content.map(article => { 
            return (
                <li>
                    <img src={article.img} />
                    <span>{article.title}</span>
                </li>
            );
        })
    ;

    return (
        <div className="rightFContent">
            <h2>Most Popular</h2>
            <div>
                <ul className="contentList">
                    {renderContent}
                </ul>
            </div>
        </div>
    );
};

export default RightFContent;

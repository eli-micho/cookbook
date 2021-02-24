import React from 'react';
import './styles.scss';

const AccountButton = ({ children, ...otherProps}) => {
    return (
        <button className="accBtn" {...otherProps}>
            {children}
        </button>
    );
};

export default AccountButton;

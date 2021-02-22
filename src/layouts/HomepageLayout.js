import { render } from '@testing-library/react';
import React from 'react';
import Header from './../components/Header';

const HomepageLayout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
        </div>
    );
};

export default HomepageLayout;

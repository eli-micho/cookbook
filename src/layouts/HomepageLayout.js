import { render } from '@testing-library/react';
import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const HomepageLayout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default HomepageLayout;

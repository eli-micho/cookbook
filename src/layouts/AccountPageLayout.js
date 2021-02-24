import React from 'react';
import Footer from './../components/Footer';

const AccountPageLayout = (props) => {
    return(
        <div>
            {props.children}
            <Footer/>
        </div>
    );
};

export default AccountPageLayout;

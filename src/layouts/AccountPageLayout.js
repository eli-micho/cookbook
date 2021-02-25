import React from 'react';
import Footer from './../components/Footer';

const AccountPageLayout = (props) => {
    return(
        <div>
            <div className="profile">
                <div className="main">
                    {props.children}
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default AccountPageLayout;

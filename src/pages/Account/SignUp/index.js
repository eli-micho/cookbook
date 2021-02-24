import React, { Component } from 'react';
import './styles.scss';

//Components
import SignUpForm from './../../../components/SignUpForm';

class SignUp extends Component {
    render(){
        return (
            <section className="signUp">
                <SignUpForm />
            </section>
        );
    };
};

export default SignUp;

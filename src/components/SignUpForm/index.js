import React, { Component } from 'react';
import './styles.scss';

import { auth, handleUserProfile } from './../../firebase/utils';

import AccountInput from './../Forms/AccountInput';
import AccountButton from '../Forms/AccountButton';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    errors: []
};

class SignUpForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };   

    handleFormSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password } = this.state;

        try {
           const { user } = await auth.createUserWithEmailAndPassword(email, password);
           await handleUserProfile(user, { displayName });

           this.setState({
               ...initialState
           });
        }catch(err) {
            //console.log(err)
        }
    };
    render(){
        const { displayName, email, password, errors } = this.state;

        return (
            <div className="signUpContent">
                <div className="wrap">
                    <h3>Sign up With Email</h3>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <form className="signUpForm" onSubmit={this.handleFormSubmit}>
                            <AccountInput 
                                type="text"
                                name="displayName"
                                id="displayName"
                                value={displayName}
                                placeholder="Display Name"
                                autoComplete="off"
                                onChange={this.handleChange}
                            />

                            <AccountInput 
                                type="email"
                                name="email"
                                id="displayName"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />

                            <AccountInput 
                                type="password"
                                name="password"
                                id="displayName"
                                value={password}
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
        
                            <div className="pwdSub">
                                Please provide a password with at least 6 characters. Your password must include at least 1 uppercase letter or special character.
                            </div>
                            <div className="ageConsentWrap">
                                <input type="radio" id="ageConsent" name="ageConsent" />
                                <label for="ageConsent">I am 13 years of age or older and agree to the Terms of Service and Privacy Policy.</label>
                            </div>

                            <AccountButton type="submit">
                                Create my account
                            </AccountButton>
                    </form>
                </div>
            </div>
        );
    }
};

export default SignUpForm;

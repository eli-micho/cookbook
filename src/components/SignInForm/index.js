import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.scss';
import { auth, signInWithGoogle } from './../../firebase/utils';

import AccountInput from './../Forms/AccountInput';
import AccountButton from './../Forms/AccountButton';

const initialState = {
    email: '',
    password: ''
};

class SignInForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            referrer: false,
            ...initialState
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }; 

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });
        }catch(err) {
            //console.log(err)
        }
    };

    render(){
        if(this.state.referrer === true){
            return <Redirect to='/' />
        }

        const { email, password } = this.state;
        return(
            <div className="signInContent">
                <div className="wrap">
                    <form className="signInForm" onSubmit={this.handleSubmit}>
                        <div className="socialSignIn">
                            <h3>Sign In With Social</h3>
                            <AccountButton onClick={signInWithGoogle}>
                                <i className="fa fa-google"></i>Google
                            </AccountButton>
                        </div>
        
                        <div className="usernameSignIn">
                            <h3>Sign in With Email</h3>

                            <AccountInput 
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />

                            <AccountInput 
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
                        </div>

                        <AccountButton type="submit">
                            Sign In
                        </AccountButton>
                    </form>
                </div>
                
            </div>
        );
    };
};

export default SignInForm;

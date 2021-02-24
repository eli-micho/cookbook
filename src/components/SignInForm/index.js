import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.scss';
import { signInWithGoogle } from './../../firebase/utils';

class SignInForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            referrer: false,
        };
    };
    handleSubmit = async e => {
        e.preventDefault()
    };

    render(){
        if(this.state.referrer === true){
            return <Redirect to='/' />
        }
        return(
            <div className="signInContent">
                <form className="signInForm" onSubmit={this.handleSubmit}>
                    <div className="socialSignIn">
                        <h3>Sign In With Social</h3>
                        <button onClick={signInWithGoogle}><i className="fa fa-google"></i>Google</button>
                    </div>
    
                    <div className="usernameSignIn">
                        <h3>Sign in With Email</h3>
                        <input type="text" id="username" name="username" placeholder="Username" />
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
    
                    <input type="submit" id="submit" value="Sign In" />
                </form>
            </div>
        );
    };
};

export default SignInForm;

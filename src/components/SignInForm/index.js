import React from 'react';
import './styles.scss';

const SignInForm = () => {
    return(
        <div className="signInContent">
            <form className="signInForm">
                <div className="socialSignIn">
                    <h3>Sign In With Social.</h3>
                    <button><i className="fa fa-facebook"></i>Facebook</button>
                    <button><i className="fa fa-google"></i>Google</button>
                </div>

                <div className="usernameSignIn">
                    <h3>Sign in With Username</h3>
                    <input type="text" id="username" name="username" placeholder="Username" />
                    <input type="password" id="password" name="password" placeholder="Password" />
                </div>

                <input type="submit" id="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default SignInForm;

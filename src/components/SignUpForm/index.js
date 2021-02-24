import React from 'react';
import './styles.scss';

const SignUpForm = () => {
    return (
        <div className="signUpContent">
            <form className="signUpForm">
                <div className="socialSignUp">
                    <h3>Sign Up With Social</h3>
                    <button><i className="fa fa-facebook"></i>Facebook</button>
                    <button><i className="fa fa-google"></i>Google</button>
                </div>

                <div className="usernameSignIn">
                    <h3>Sign up With Email</h3>
                    <input type="text" id="username" name="username" placeholder="Username" />
                    <input type="password" id="password" name="password" placeholder="Password" />
                </div>

                <input type="submit" id="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default SignUpForm;

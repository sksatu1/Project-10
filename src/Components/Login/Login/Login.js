import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, handleLogin, handleEmailOnBlur, handlePasswordOnBlur } = useAuth();

    const location = useLocation();
    const redirect_url = location?.state?.from || '/';
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const handleEmailLogIn = (event) => {
        handleLogin(event)
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className="login">
            <div>
                <h2>Please Login</h2>
                <form onSubmit={handleEmailLogIn}>
                    <input onBlur={handleEmailOnBlur} type="email" name="email" id="email" placeholder="Your email" required /><br /><br />
                    <input onBlur={handlePasswordOnBlur} type="password" name="password" id="password" placeholder="Your password" required /><br /><br />
                    <input className="btn btn-danger" type="submit" value="Login" /><br />
                </form>
                <hr />
                <p>New to SK Private Hospital? <Link style={{ color: 'white' }} to="/register">Create Account</Link></p>
                <button className="btn btn-danger" onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;
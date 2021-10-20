import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Register = () => {
    const { signInUsingGoogle, handleNameOnBlur, handleEmailOnBlur, handlePasswordOnBlur, handleRegistration } = useAuth();

    const location = useLocation();
    const redirect_url = location?.state?.from || '/';
    const history = useHistory();


    const handleEmailRegister = (event) => {
        handleRegistration(event)
            .then(() => {
                history.push(redirect_url);
                window.location.reload();
            })
    }

    return (
        <div className="login">
            <div>
                <h2>Please Register</h2>
                <form onSubmit={handleEmailRegister}>
                    <input onBlur={handleNameOnBlur} type="text" placeholder="Your name" required /><br /><br />
                    <input onBlur={handleEmailOnBlur} type="email" name="email" id="email" placeholder="Your email" required /><br /><br />
                    <input onBlur={handlePasswordOnBlur} type="password" name="password" id="password" placeholder="Enter your password" required /><br /><br />
                    <input className="btn btn-danger" type="submit" value="Register" /><br />
                </form>
                <hr />
                <p>Already have an account? <Link style={{ color: 'black' }} to="/login">Login</Link></p>
                <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;
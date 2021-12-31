import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    });

    const PageDisplay = () => {
        return <SignIn formData={formData} setFormData={setFormData} />;
    };

    return (
        <div className="form">
            <div className="form-container">
                <div className="header">
                    <h1>Sing In</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">

                    <button
                        onClick={() => {
                            alert("FORM SUBMITTED");
                            console.log(formData);
                        }}>
                        Sign In
                    </button>
                </div>
                <Link to="/signup">New user? Please Sign Up</Link>
            </div>
        </div>
    );
};

export default SignInForm;
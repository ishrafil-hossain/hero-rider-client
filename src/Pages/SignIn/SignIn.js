import React from 'react';

const SignIn = ({ formData, setFormData }) => {

    return (
        <div className="sign-up-container">
            <input
                type="text"
                placeholder="Email..."
                value={formData.email}
                onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                }
            />
            <input
                type="text"
                placeholder="Password..."
                value={formData.password}
                onChange={(event) =>
                    setFormData({ ...formData, password: event.target.value })
                }
            />

        </div>

    );

};

export default SignIn;
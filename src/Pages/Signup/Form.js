import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarInfo from './CarInfo';
import DrivingLicence from './DrivingLicence';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignupInfo from './SignupInfo';
import Vehicle from './Vehicle';

const Form = () => {
    const [page, setPage] = useState(0);
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

    const FormTitles = ["Sign Up", "Personal Info", "Car Info", "Vehicle", "Driving Licence", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignupInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <CarInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 3) {
            return <Vehicle formData={formData} setFormData={setFormData} />;
        } else if (page === 4) {
            return <DrivingLicence formData={formData} setFormData={setFormData} />;
        }
        else {
            return <OtherInfo formData={formData} setFormData={setFormData} />;
        }
    };


    return (
        <div className="form">
            <div className="progressbar">
                <div
                    style={{ width: page === 0 ? "16.67%" : page === 1 ? "33.34%" : page === 2 ? "50.01%" : page === 3 ? "66.68%" : page === 4 ? "83.35%" : "100%" }}
                ></div>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
                <Link to="/signin">Have an account? Sign In</Link>
            </div>
        </div>
    );
};

export default Form;
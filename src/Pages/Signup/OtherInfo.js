import React from 'react';

const OtherInfo = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">

            <label for="img">NID:</label>
            <input
                type="file"
                id="img"
                name="nid"
                value={formData.nid}
                onChange={(e) => {
                    setFormData({ ...formData, nid: e.target.value });
                }}
                accept="image/*" />


            <label for="img">Profile Picture:</label>
            <input
                type="file"
                id="img"
                name="profile"
                value={formData.profile}
                onChange={(e) => {
                    setFormData({ ...formData, profile: e.target.value });
                }}
                accept="image/*" />

        </div>
    );
};

export default OtherInfo;
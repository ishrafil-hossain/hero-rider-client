import React from 'react';

const DrivingLicence = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">

            <label for="img">Driving Licence Photo:</label>
            <input
                type="file"
                id="img"
                name="driving-licence"
                value={formData.licence}
                onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                }}
                accept="image/*" />

            <input
                type="text"
                placeholder="Area..."
                value={formData.area}
                onChange={(e) => {
                    setFormData({ ...formData, area: e.target.value });
                }}
            />

        </div>
    );
};

export default DrivingLicence;
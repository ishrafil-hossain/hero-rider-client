import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
            <input
                required
                type="text"
                placeholder="Full Name..."
                value={formData.fullName}
                onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                }}
            />
            <input
                required
                type="number"
                placeholder="Age..."
                value={formData.age}
                onChange={(e) => {
                    setFormData({ ...formData, age: e.target.value });
                }}
            />
            <input
                required
                type="textfield"
                placeholder="Adress..."
                value={formData.address}
                onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                }}
            />
            <input
                required
                type="number"
                placeholder="Phone..."
                value={formData.phone}
                onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                }}
            />
        </div>
    );
};

export default PersonalInfo;
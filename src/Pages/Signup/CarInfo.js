import React from 'react';

const CarInfo = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
            <input
                type="text"
                placeholder="Name..."
                value={formData.name}
                onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                }}
            />
            <input
                type="text"
                placeholder="Model..."
                value={formData.model}
                onChange={(e) => {
                    setFormData({ ...formData, model: e.target.value });
                }}
            />
            <input
                required
                type="text"
                placeholder="Name Palate..."
                value={formData.namePalate}
                onChange={(e) => {
                    setFormData({ ...formData, namePalate: e.target.value });
                }}
            />

        </div>
    );
};

export default CarInfo;
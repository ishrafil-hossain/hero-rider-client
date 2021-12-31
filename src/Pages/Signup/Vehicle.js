import React from 'react';

const Vehicle = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
            <input
                type="radio"
                id="car"
                name="vehicle"
                value={formData.car}
                onChange={(e) => {
                    setFormData({ ...formData, car: e.target.value });
                }}
            />
            <label for="car">Car</label> <br />


            <input
                type="radio"
                id="bike"
                name="vehicle"
                value={formData.bike}
                onChange={(e) => {
                    setFormData({ ...formData, bike: e.target.value });
                }}
            />
            <label for="bike">Bike</label> <br />

        </div>
    );
};

export default Vehicle;
import React from 'react';

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step2;

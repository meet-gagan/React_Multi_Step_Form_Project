import React from 'react';

const Step3 = ({ formData, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., API call)
    alert('Form submitted!');
  };

  return (
    <div>
      <h2>Step 3: Confirm Information</h2>
      <form onSubmit={handleSubmit}>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Address: {formData.address}</p>
        <p>City: {formData.city}</p>
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Step3;

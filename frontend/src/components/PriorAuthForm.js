import React, { useState } from 'react';
import { submitAuthRequest } from '../api';

const PriorAuthForm = () => {
  const [formData, setFormData] = useState({
    treatmentType: '',
    insurancePlan: '',
    dateOfService: '',
    diagnosisCode: '',
    doctorNotes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitAuthRequest(formData);
    // Reset form or show success message
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl mb-4">Prior Authorization Request</h1>
      <input type="text" name="treatmentType" placeholder="Treatment Type" onChange={handleChange} required />
      <input type="text" name="insurancePlan" placeholder="Insurance Plan" onChange={handleChange} required />
      <input type="date" name="dateOfService" onChange={handleChange} required />
      <input type="text" name="diagnosisCode" placeholder="Diagnosis Code" onChange={handleChange} required />
      <textarea name="doctorNotes" placeholder="Doctor's Notes" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PriorAuthForm;

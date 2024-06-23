import React, { useState } from 'react';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: ''
  });
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />;
    case 3:
      return <Step3 formData={formData} prevStep={prevStep} />;
    default:
      return null;
  }
};

export default App;

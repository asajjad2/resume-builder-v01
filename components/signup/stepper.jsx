// Stepper.js
import React from 'react';

function Stepper({ steps, currentStep, onNext, onPrev, onStepChange }) {
  return (
    <div>
      <ul>
        {steps.map((step, index) => (
          <li key={step}>
            <button
              onClick={() => onStepChange(index)}
              className={index === currentStep ? 'active' : ''}
            >
              {step}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={onPrev} disabled={currentStep === 0}>Previous</button>
        <button onClick={onNext} disabled={currentStep === steps.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default Stepper;

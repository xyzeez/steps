import React from 'react';
import { useState } from 'react';
import './index.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const Step = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  const toggleOpenState = () => setIsOpen((isOpen) => !isOpen);

  const handlePrevBtn = () => {
    if (step > 1) setStep((step) => --step);
  };

  const handleNextBtn = () => {
    if (step < messages.length) setStep((step) => ++step);
  };

  return (
    <React.Fragment>
      <button className="close" onClick={toggleOpenState}>
        &times;
      </button>

      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, i) => (
              <Number step={step} count={i + 1} Key={i} />
            ))}
          </div>
          <Message step={step} />
          <Buttons handlePrev={handlePrevBtn} handleNext={handleNextBtn} />
        </div>
      ) : null}
    </React.Fragment>
  );
};

const Number = ({ count, step }) => (
  <div className={step === count ? 'active' : ''}>{count}</div>
);

const Message = ({ step }) => {
  return (
    <div className="message">
      <h3>
        Step {step}: {messages[step - 1]}{' '}
      </h3>
    </div>
  );
};

const Buttons = ({ handlePrev, handleNext }) => {
  return (
    <div className="buttons">
      <button onClick={handlePrev}>
        <span>Previous</span>
      </button>
      <button onClick={handleNext}>
        <span>Next</span>
      </button>
    </div>
  );
};

const App = () => <Step />;

export default App;

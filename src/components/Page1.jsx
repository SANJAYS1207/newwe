import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page1.css';
const Page1 = () => {
  const navigate = useNavigate();
  const [transition, setTransition] = useState(false);

  const handleNavigation = (path) => {
    setTransition(true);
    setTimeout(() => {
      navigate(path);
    }, 800); // Match with the animation duration
  };

  return (
    <div className={`container ${transition ? 'slide-out' : ''}`}>
      <div className="shape learn" onClick={() => handleNavigation('/dashboard')}>
        <div className="icon learn-icon"/>
        <div className="text">LEARN</div>
      </div>
      <div className="shape practice" onClick={() => handleNavigation('/practice')}>
        <div className="icon practice-icon" />
        <div className="text">PRACTICE</div>
      </div>
      <div className="shape test" onClick={() => handleNavigation('/taketest')}>
        <div className="icon test-icon" />
        <div className="text">TAKE TEST</div>
      </div>
    </div>
  );
};

export default Page1;

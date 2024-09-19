import React, { useState, useEffect } from 'react';
import './ApplauseEffect.css'; // Import CSS for styling

const ApplauseEffect = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500); // Applause effect duration

      return () => clearTimeout(timer); // Clean up timer on unmount
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="applause-overlay">
      <div className="applause-message">👏👏👏</div>
    </div>
  );
};

export default ApplauseEffect;

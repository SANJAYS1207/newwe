import React from 'react';
import './Imagedisplay.css'; // Import CSS file for styling

const Imagedisplay = ({ image }) => {
  return (
    <div className="imag-display">
      <img src={image} alt="Current" />
    </div>
  );
};

export default Imagedisplay;

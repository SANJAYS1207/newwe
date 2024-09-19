import React from 'react';


const FeedbackEffect = ({ message, type }) => {
  return (
    <div className={`feedback-effect ${type}`}>
      {message}
    </div>
  );
};

export default FeedbackEffect;

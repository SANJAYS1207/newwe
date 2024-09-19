import React from 'react';

const PhonicsButton = ({ audioSrc, onPlay }) => {
  return (
    <button onClick={onPlay}>Play Phonics</button>
  );
};

export default PhonicsButton;

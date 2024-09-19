import React from 'react';
import AlphabetGames from './AlphabetGames';
import PhoneticGames from './PhoneticGames';
import './P3.css';

const PenPlotter = () => {
  return (
    <div className='o'>
      <AlphabetGames />
      <PhoneticGames />
    </div>
  );
};

export default PenPlotter;

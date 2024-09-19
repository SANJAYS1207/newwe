import React, { useState, useEffect } from 'react';
import './PhoneticGames.css'; // For styling

// Array of phonetic pairs with sound, letter, and audio
const phoneticPairsData = [
  { sound: '1', letter: 'A', audio: '/phonics/A.mp3' },
  { sound: '2', letter: 'B', audio: '/phonics/B.mp3' },
  { sound: '3', letter: 'C', audio: '/phonics/C.mp3' },
];

// Shuffle function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const PhoneticGames = () => {
  const [phoneticPairs, setPhoneticPairs] = useState([]);
  const [shuffledSounds, setShuffledSounds] = useState([]);
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const [selectedSound, setSelectedSound] = useState(null);
  const [correct, setCorrect] = useState(null);

  // Shuffle phonetic pairs and set state
  useEffect(() => {
    const shuffledPairs = shuffleArray([...phoneticPairsData]);
    setPhoneticPairs(shuffledPairs);
    setShuffledSounds(shuffledPairs.map(pair => ({ sound: pair.sound, audio: pair.audio })));
    setShuffledLetters(shuffleArray(shuffledPairs.map(pair => pair.letter)));
  }, []);

  // Play the sound when a sound button is clicked
  const playSound = (audioSrc) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  // Handle sound button click
  const handleSoundClick = (sound, audioSrc) => {
    setSelectedSound(sound);
    playSound(audioSrc);
  };

  // Handle letter button click
  const handleLetterClick = (letter) => {
    if (selectedSound) {
      const selectedPair = phoneticPairs.find(pair => pair.sound === selectedSound);
      const isCorrect = selectedPair && selectedPair.letter === letter;
      setCorrect(isCorrect ? '🥳🥳' : '😟☹');
    }
  };

  return (
    <div className="phonetic-game">
      <h1 className="title">Phonics Game</h1>
      <div className="matching-container">
        <div className="sounds">
          <h2>Sounds</h2>
          {shuffledSounds.map((soundObj, index) => (
            <button
              key={index}
              className="sound-button"
              onClick={() => handleSoundClick(soundObj.sound, soundObj.audio)}
            >
              <img src="https://i.pinimg.com/736x/ef/07/47/ef07471474a0e1086a185086c342ae00.jpg" alt={`Play sound ${soundObj.sound}`} />
              {/* If the icon doesn't show, try using text temporarily */}
              {/* {`Play Sound ${soundObj.sound}`} */}
            </button>
          ))}
        </div>
        <div className="letters">
          <h2>Letters</h2>
          {shuffledLetters.map((letter, index) => (
            <button key={index} onClick={() => handleLetterClick(letter)}>
              {letter}
            </button>
          ))}
        </div>
      </div>
      {correct && <p>{correct}</p>}
    </div>
  );
};

export default PhoneticGames;

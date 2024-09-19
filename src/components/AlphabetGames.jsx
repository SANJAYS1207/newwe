import React, { useState, useEffect } from 'react';
import './AlphabetGames.css'; // For styling

const alphabetPairsData = [
  { letter: 'A', word: 'Apple' },
  { letter: 'B', word: 'banana' },
  { letter: 'C', word: 'cat' }
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const AlphabetGames = () => {
  const [letters, setLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [correctPair, setCorrectPair] = useState({ letter: null, word: null });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const shuffledPairs = shuffleArray([...alphabetPairsData]);
    setLetters(shuffledPairs.map(pair => pair.letter));
    setWords(shuffleArray(shuffledPairs.map(pair => pair.word)));
  }, []);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handleWordClick = (word) => {
    if (selectedLetter) {
      const matchedPair = alphabetPairsData.find(pair => pair.letter === selectedLetter && pair.word === word);
      if (matchedPair) {
        setMessage('🥳🥳');
        setCorrectPair(matchedPair);
      } else {
        setMessage('😟☹');
        setCorrectPair({ letter: null, word: null });
      }
    }
  };

  return (
    <div className="alphabet-game">
      <h1 className="title">Match the Phonics</h1> {/* Added Title */}
      <div className="matching-container">
        <div className="letters">
          <h2 className='k'>Letters</h2>
          {letters.map(letter => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={correctPair.letter === letter ? 'correct' : (selectedLetter === letter ? 'selected' : '')}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="words">
          <h2 className='k'>Words</h2>
          {words.map(word => (
            <button
              key={word}
              onClick={() => handleWordClick(word)}
              className={correctPair.word === word ? 'correct' : ''}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AlphabetGames;

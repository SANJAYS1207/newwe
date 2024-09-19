import React, { useState, useEffect } from 'react';
import './NewPage.css';  // Adding a CSS file for custom animations

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (min + max + 1)) + min;

// Function to read out loud any text
const speak = (text) => {
  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1.4;  // Control the speed of speech
  window.speechSynthesis.speak(speech);
};

const NewPage = () => {
  const [numbers, setNumbers] = useState([]);
  const [target, setTarget] = useState(0);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [message, setMessage] = useState('');
  const [operation, setOperation] = useState(null);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomNumbers = Array.from({ length: 5 }, () => generateRandomNumber(1, 10));
    setNumbers(randomNumbers);
    setTarget(generateRandomNumber(10, 100));
    setSelectedNumbers([]);
    setMessage('');
    setOperation(null);
  };

  const handleNumberClick = (num, index) => {
    if (selectedNumbers.length < 2) {
      setSelectedNumbers([...selectedNumbers, { num, index }]);
      speak(num);
    }
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    if(op === '-') speak("minus");
    if(op === '+') speak("plus");
    if(op === '*') speak("multiplied by");
    if(op === '/') speak("divided by");
  };

  const calculateResult = () => {
    if (selectedNumbers.length !== 2 || !operation) return;

    const [first, second] = selectedNumbers.map((item) => item.num);
    let result;

    switch (operation) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      case '/':
        result = first / second;
        break;
      default:
        return;
    }

    speak("Result of " + first + " " + operation + " " + second + " is " + result);

    const updatedNumbers = [...numbers];
    updatedNumbers[selectedNumbers[0].index] = result;
    updatedNumbers.splice(selectedNumbers[1].index, 1);

    setNumbers(updatedNumbers);
    setSelectedNumbers([]);
    setOperation(null);

    if (result === target) {
      setMessage('Congratulations! You reached the target!');
      speak("Congratulations! You reached the target!");
    } else if (updatedNumbers.length === 1) {
      setMessage('Game Over! You did not reach the target.');
      speak("Game Over! You did not reach the target.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Number Clash</h1>
        <p className="target">Target: {target}</p>
      </div>

      <div className="numbersContainer">
        {numbers.map((num, index) => (
          <button
            key={index}
            onClick={() => handleNumberClick(num, index)}
            className={`numberButton ${selectedNumbers.some((item) => item.index === index) ? 'selected' : ''}`}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="operationsContainer">
        {['+', '-', '*', '/'].map((op) => (
          <button
            key={op}
            onClick={() => handleOperationClick(op)}
            className={`operationButton ${operation === op ? 'active' : ''}`}
          >
            {op}
          </button>
        ))}
      </div>

      <button onClick={calculateResult} className="calculateButton">
        Calculate
      </button>

      <div className="messageContainer">
        <p className="message">{message}</p>
        <button onClick={startNewGame} className="newGameButton">
          Start New Game
        </button>
      </div>
    </div>
  );
};

export default NewPage;

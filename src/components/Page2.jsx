import React, { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import './Page2.css';

const words = [
  { word: 'cat', image: '/AssetsforPage1/cat.jpg', audio: '/AudioforPage1/cat.mp3' },
  { word: 'dog', image: '/AssetsforPage1/dog.avif', audio: '/AudioforPage1/dog.mp3' },
  { word: 'cup', image: '/AssetsforPage1/cup.jpeg', audio: '/AudioforPage1/cup.mp3' },
  { word: 'apple', image: '/AssetsforPage1/apple.png', audio: '/AudioforPage1/apple.mp3' },
];

function Page2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

  const currentWordData = words[currentIndex];

  const playAudio = () => {
    const audio = new Audio(currentWordData.audio);
    audio.play();
  };

  const handleSubmit = () => {
    if (input.toLowerCase() === currentWordData.word.toLowerCase()) {
      setMessage('Correct!');
    } else {
      setMessage(`Wrong! The correct word is ${currentWordData.word}.`);
    }
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % words.length);
    setInput('');
    setMessage('');
  };

  const handleKeyPress = (letter) => {
    setInput((prev) => prev + letter);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSaveCanvas = () => {
    const canvas = canvasRef.current;
    const imageDataUrl = canvas.toDataURL('image/png');

    setIsLoading(true);
    Tesseract.recognize(imageDataUrl, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        const recognizedText = result.data.text.trim();
        if (recognizedText) {
          setInput((prev) => prev + recognizedText);
        }
        setIsLoading(false);
      });
  };

  const handleDrawStart = (x, y) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(x, y);
  };

  const handleDrawMove = (x, y) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineTo(x, y);
    context.stroke();
  };

  const handleMouseDraw = (e) => {
    if (e.buttons !== 1) return; // Only draw when the left mouse button is pressed
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    handleDrawMove(x, y);
  };

  const handleTouchDraw = (e) => {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    handleDrawMove(x, y);
  };

  const handleTouchStart = (e) => {
    const rect = e.target.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    handleDrawStart(x, y);
  };

  const handleMouseStart = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    handleDrawStart(x, y);
  };

  return (
    <div className="App1">
      <h2>Type the word you hear:</h2>
      <img
        src={currentWordData.image}
        alt={currentWordData.word}
        className="word-image"
      />

      <button onClick={playAudio} className="audio-button">
        Play Audio
      </button>

      <input
        type="text"
        value={input}
        readOnly
        placeholder="Type the word here!!!"
        className="input-field"
      />

      <div className="keyboard-container">
        {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map((letter) => (
          <button key={letter} className="keyboard-key" onClick={() => handleKeyPress(letter)}>
            {letter}
          </button>
        ))}
        <button className="keyboard-key delete-key" onClick={handleDelete}>⌫</button>
      </div>

      <div className="writing-pad-container">
        <h3 style={{ color: 'white' }}>Write a character:</h3>
        <canvas
          ref={canvasRef}
          width={500}
          height={300}
          style={{ border: '2px solid #ffffff', backgroundColor: '#ffffff', borderRadius: '5px' }}
          onMouseDown={handleMouseStart}
          onMouseMove={handleMouseDraw}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchDraw}
        ></canvas>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button
            onClick={handleClearCanvas}
            className="writing-pad-button"
          >
            Clear Pad
          </button>
          <button
            onClick={handleSaveCanvas}
            className="writing-pad-button"
          >
            Save & Convert to Text
          </button>
        </div>

        {isLoading && (
          <div style={{ marginTop: '10px', color: '#ffffff' }}>
            <p>Processing Image... {progress}%</p>
          </div>
        )}
      </div>

      <p>{message}</p>

      <div className="button-container">
        <button onClick={handleSubmit} className="submit-button1">
          Submit
        </button>
        <button onClick={handleNext} className="next-button1">
          Next
        </button>
      </div>
    </div>
  );
}

export default Page2;

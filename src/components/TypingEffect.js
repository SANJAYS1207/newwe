// TypingEffect.js
import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ text = 'InnoScribe', speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index >= text.length) {
        clearInterval(typingInterval);
      }
    }, speed);
    
    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <h1 className="typing-effect">{displayedText}</h1>;
};

export default TypingEffect;

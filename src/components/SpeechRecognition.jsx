import React, { useState, useEffect } from 'react';

const SpeechRecognition = ({ onResult }) => {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const recognition = new window.SpeechRecognition() || new window.webkitSpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      setError(event.error);
      setIsListening(false);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => recognition.stop();
  }, [isListening, onResult]);

  const toggleListening = () => setIsListening(prev => !prev);

  return (
    <div>
      <button onClick={toggleListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default SpeechRecognition;

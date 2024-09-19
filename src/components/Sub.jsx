import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

function Sub() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [apples, setApples] = useState(Array(9).fill(false));
  const [oranges, setOranges] = useState(Array(9).fill(false));
  const [difference, setDifference] = useState('');
  const [message, setMessage] = useState('');
  const [showOverlay] = useState(false);

  const handleAppleClick = (index) => {
    const newApples = [...apples];
    newApples[index] = !newApples[index];
    setApples(newApples);
  };

  const handleOrangeClick = (index) => {
    const newOranges = [...oranges];
    newOranges[index] = !newOranges[index];
    setOranges(newOranges);
  };

  const checkAnswer = () => {
    const appleCount = apples.filter((struck) => struck).length;
    const orangeCount = oranges.filter((struck) => struck).length;
    const correctDifference = parseInt(num1) - parseInt(num2);

    if (appleCount === parseInt(num1) && orangeCount === parseInt(num2) && parseInt(difference) === correctDifference) {
      setMessage('✅ CORRECT');
      confetti();
      confetti();// Trigger the confetti effect
      confetti();// Trigger the confetti effect
      confetti();// Trigger the confetti effect
      confetti();// Trigger the confetti effect
      confetti();
    } else {
      setMessage('❌ INCORRECT');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff', backgroundColor: '#07192f', padding: '20px' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>Subtraction</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <label htmlFor="input1" style={{ marginBottom: '10px', fontSize: '24px', display: 'block' }}>Input 1</label>
            <input
              id="input1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="First Number"
              style={{ width: '350px', height: '60px', fontSize: '24px', marginBottom: '20px', backgroundColor: '#444', color: '#fff', border: '2px solid #007BFF' }}
              max="9"
              min="0"
            />
          </div>
          <div style={{ marginLeft: '20px' }}>
            {[...Array(9)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleAppleClick(index)}
                style={{
                  fontSize: '60px',
                  marginRight: '10px',
                  cursor: 'pointer',
                  textDecoration: apples[index] ? 'line-through' : 'none',
                }}
              >
                🍎
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <label htmlFor="input2" style={{ marginBottom: '10px', fontSize: '24px', display: 'block' }}>Input 2</label>
            <input
              id="input2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Second Number"
              style={{ width: '350px', height: '60px', fontSize: '24px', backgroundColor: '#444', color: '#fff', border: '2px solid #007BFF' }}
              max="9"
              min="0"
            />
          </div>
          <div style={{ marginLeft: '20px' }}>
            {[...Array(9)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleOrangeClick(index)}
                style={{
                  fontSize: '60px',
                  marginRight: '10px',
                  cursor: 'pointer',
                  textDecoration: oranges[index] ? 'line-through' : 'none',
                }}
              >
                🍊
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="difference" style={{ marginBottom: '10px', fontSize: '24px', display: 'block' }}>Difference</label>
          <input
            id="difference"
            type="number"
            value={difference}
            onChange={(e) => setDifference(e.target.value)}
            placeholder="Enter the Difference"
            style={{ width: '350px', height: '60px', fontSize: '24px', backgroundColor: '#444', color: '#fff', border: '2px solid #007BFF' }}
          />
        </div>
        <div style={{ fontSize: '60px' }}>
          {apples.map((struck, index) => struck && <span key={`apple-${index}`} style={{ marginRight: '10px' }}>🍎</span>)}
          {oranges.map((struck, index) => struck && <span key={`orange-${index}`} style={{ marginRight: '10px' }}>🍊</span>)}
        </div>
      </div>

      <button onClick={checkAnswer} style={{ marginTop: '20px', fontSize: '24px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Check</button>
      <div style={{ fontSize: '32px', marginTop: '20px' }}>{message}</div>

      <Link to="/" className="back-button" style={{ marginTop: '40px', display: 'inline-block', fontSize: '20px', color: '#fff', textDecoration: 'none', backgroundColor: '#007BFF', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
        Back to Home
      </Link>

      {showOverlay && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          pointerEvents: 'none'
        }}>
          {/* Confetti effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}>
            {/* Placeholder for confetti animation */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sub;

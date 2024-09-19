import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

function Add() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [strikedApples, setStrikedApples] = useState([]);
  const [strikedOranges, setStrikedOranges] = useState([]);
  const [sum, setSum] = useState('');
  const [message, setMessage] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAppleClick = (index) => {
    setStrikedApples((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleOrangeClick = (index) => {
    setStrikedOranges((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleCheck = () => {
    const correctApples = parseInt(num1) === strikedApples.length;
    const correctOranges = parseInt(num2) === strikedOranges.length;
    const correctSum = parseInt(sum) === parseInt(num1) + parseInt(num2);

    if (correctApples && correctOranges && correctSum) {
      setMessage('✅ CORRECT');
      confetti(); // Trigger the confetti effect
      setTimeout(() => setShowOverlay(false), 5000);
    } else {
      setMessage('❌ INCORRECT');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff', backgroundColor: '#07192f', padding: '20px' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>Addition</h2>

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
                style={{
                  fontSize: '60px',
                  marginRight: '10px',
                  textDecoration: strikedApples.includes(index) ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => handleAppleClick(index)}
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
                style={{
                  fontSize: '60px',
                  marginRight: '10px',
                  textDecoration: strikedOranges.includes(index) ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => handleOrangeClick(index)}
              >
                🍊
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <label htmlFor="sumInput" style={{ marginBottom: '10px', fontSize: '24px', display: 'block' }}>Sum</label>
            <input
              id="sumInput"
              type="number"
              value={sum}
              onChange={(e) => setSum(e.target.value)}
              placeholder="Sum"
              style={{ width: '350px', height: '60px', fontSize: '24px', marginBottom: '20px', backgroundColor: '#444', color: '#fff', border: '2px solid #007BFF' }}
            /><br></br>
          </div>
          <div style={{ fontSize: '60px', marginLeft: '20px' }}>
            {strikedApples.map((index) => (
              <span key={`apple-${index}`} style={{ marginRight: '10px' }}>🍎</span>
            ))}
            {strikedOranges.map((index) => (
              <span key={`orange-${index}`} style={{ marginRight: '10px' }}>🍊</span>
            ))}
          </div>
        </div>
      </div>

      <button onClick={handleCheck} style={{ fontSize: '24px', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Check</button>

      <div style={{ fontSize: '32px', marginTop: '20px' }}>{message}</div>

      <Link to="/page6" className="back-button" style={{ marginTop: '40px', display: 'inline-block', fontSize: '20px', color: '#fff', textDecoration: 'none', backgroundColor: '#007BFF', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
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
          <div className="confetti-animation">
          </div>
        </div>
      )}
    </div>
  );
}

export default Add;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Mul() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [circles, setCircles] = useState([]);
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    if (
      !isNaN(number1) &&
      !isNaN(number2) &&
      number1 >= 0 &&
      number1 <= 9 &&
      number2 >= 0 &&
      number2 <= 9
    ) {
      const newCircles = Array(number1).fill(null);
      setCircles(newCircles);
      setResult(number1 * number2);
    } else {
      // Show an error message if inputs are invalid
      alert('Please enter valid numbers between 0 and 9.');
    }
  };

  // Calculate circle diameter based on the number of elements
  const calculateCircleSize = (count) => {
    // Base size plus 10px per element to prevent overcrowding
    const baseSize = 150;
    const additionalSize = 10 * Math.ceil(Math.sqrt(count)); // Adjust size based on the square root of count
    return baseSize + additionalSize;
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        color: '#fff',
        backgroundColor: '#07192f',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>Multiplication</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        {/* Input for First Number */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div>
            <label
              htmlFor="input1"
              style={{
                marginBottom: '10px',
                fontSize: '24px',
                display: 'block',
              }}
            >
              Input 1
            </label>
            <input
              id="input1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="First Number"
              style={{
                width: '300px',
                height: '50px',
                fontSize: '24px',
                marginBottom: '20px',
                backgroundColor: '#444',
                color: '#fff',
                border: '2px solid #007BFF',
                borderRadius: '5px',
              }}
              max="9"
              min="0"
            />
          </div>
        </div>

        {/* Input for Second Number */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div>
            <label
              htmlFor="input2"
              style={{
                marginBottom: '10px',
                fontSize: '24px',
                display: 'block',
              }}
            >
              Input 2
            </label>
            <input
              id="input2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Second Number"
              style={{
                width: '300px',
                height: '50px',
                fontSize: '24px',
                backgroundColor: '#444',
                color: '#fff',
                border: '2px solid #007BFF',
                borderRadius: '5px',
              }}
              max="9"
              min="0"
            />
          </div>
        </div>

        {/* Generate Answer Button */}
        <button
          onClick={handleGenerate}
          style={{
            fontSize: '24px',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Generate Answer
        </button>
      </div>

      {/* Display Circles with 🍎 based on inputs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}
      >
        {circles.map((_, index) => {
          const circleSize = calculateCircleSize(parseInt(num2));
          return (
            <div
              key={index}
              style={{
                margin: '10px',
                border: '2px solid #fff',
                borderRadius: '50%',
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#444',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  padding: '10px',
                }}
              >
                {[...Array(parseInt(num2))].map((_, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: `${Math.min(circleSize / 4, 40)}px`,
                      margin: '2px',
                      flex: '0 1 auto',
                    }}
                  >
                    🍎
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Display the Result */}
      {result !== null && (
        <div style={{ fontSize: '32px', marginTop: '20px' }}>
          The answer is: {result}
        </div>
      )}

      {/* Back to Home Link */}
      <Link
        to="/"
        className="back-button"
        style={{
          marginTop: '40px',
          display: 'inline-block',
          fontSize: '20px',
          color: '#fff',
          textDecoration: 'none',
          backgroundColor: '#007BFF',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Mul;

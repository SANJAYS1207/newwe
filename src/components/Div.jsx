import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Div() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [circles, setCircles] = useState([]);
  const [oranges, setOranges] = useState([]);
  const [result, setResult] = useState(null);
  const [remainder, setRemainder] = useState(null);

  const handleGenerate = () => {
    if (num1 && num2) {
      const dividend = parseInt(num1);
      const divisor = parseInt(num2);
      const quotient = Math.floor(dividend / divisor);
      const remainder = dividend % divisor;

      const newCircles = Array(quotient).fill(null);
      const newOranges = Array(remainder).fill(null);

      setCircles(newCircles);
      setOranges(newOranges);
      setResult((dividend / divisor).toFixed(2)); // Show result as decimal
      setRemainder(remainder);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Division</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <label htmlFor="input1" style={{ marginBottom: '10px', fontSize: '24px', display: 'block' }}>Input 1</label>
            <input
              id="input1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Dividend"
              style={{ width: '300px', height: '50px', fontSize: '24px', marginBottom: '20px' }}
              max="99"
              min="0"
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <label htmlFor="input2" style={{ marginBottom: '10px', fontSize: '24px', display: 'block' }}>Input 2</label>
            <input
              id="input2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Divisor"
              style={{ width: '300px', height: '50px', fontSize: '24px' }}
              max="99"
              min="1"
            />
          </div>
        </div>

        <button onClick={handleGenerate} style={{ fontSize: '24px', marginTop: '20px' }}>Generate Answer</button>
      </div>

      {result !== null && (
        <div style={{ fontSize: '32px', marginTop: '20px' }}>
          <div>The answer is: {result}</div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
            {circles.map((_, index) => (
              <div key={index} style={{ margin: '10px', border: '2px solid black', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {[...Array(parseInt(num2))].map((_, i) => (
                  <span key={i} style={{ fontSize: '20px', margin: '2px' }}>🍎</span>
                ))}
              </div>
            ))}
          </div>
          {remainder !== null && remainder > 0 && (
            <div style={{ fontSize: '24px', marginTop: '20px' }}>
              <div>Remainder is: {remainder}</div>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
                {oranges.map((_, index) => (
                  <div key={index} style={{ margin: '10px', border: '2px solid black', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: '30px' }}>🍊</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <Link to="/" className="back-button" style={{ marginTop: '40px', display: 'inline-block', fontSize: '20px' }}>
        Back to Home
      </Link>
    </div>
  );
}

export default Div;

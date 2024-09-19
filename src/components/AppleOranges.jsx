import React, { useState, useEffect } from 'react';

const AppleOranges = ({ operation, operands }) => {
  const [struckIndexes, setStruckIndexes] = useState([]);

  useEffect(() => {
    // Reset the struckIndexes state whenever the operands change
    setStruckIndexes([]);
  }, [operands]);

  const handleStrike = (index) => {
    if (!struckIndexes.includes(index)) {
      setStruckIndexes([...struckIndexes, index]);
    } else {
      setStruckIndexes(struckIndexes.filter((i) => i !== index));
    }
  };

  const renderFruits = () => {
    const fruitType = operation === 'addition' ? '🍎' : '🍊';
    const totalFruits = operation === 'addition' ? operands.reduce((a, b) => a + b) : operands[0];
    return Array.from({ length: totalFruits }).map((_, index) => (
      <span
        key={index}
        style={{
          textDecoration: struckIndexes.includes(index) ? 'line-through' : 'none',
          cursor: 'pointer',
          fontSize: '40px',
          marginRight: '5px',
        }}
        onClick={() => handleStrike(index)}
      >
        {fruitType}
      </span>
    ));
  };

  return (
    <div>
      <h3>Count and strike the fruits to find the answer:</h3>
      <div>{renderFruits()}</div>
    </div>
  );
};

export default AppleOranges;

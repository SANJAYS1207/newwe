import React, { useState } from 'react';
import './P5.css';


// Function to generate a grid with specified size
const generateGrid = (size, target) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const grid = [];
  const totalCells = size * size;


  // Create an array with the target letter repeated a random number of times (1 to 5)
  const numTargetLetters = Math.min(5, Math.floor(Math.random() * 5) + 1);
  const targetLetters = Array(numTargetLetters).fill(target);
 
  // Fill the rest of the grid with random letters
  const remainingLetters = Array(totalCells - numTargetLetters).fill().map(() =>
    letters[Math.floor(Math.random() * letters.length)]
  );


  // Combine the arrays and shuffle
  const allLetters = [...targetLetters, ...remainingLetters];
  for (let i = allLetters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allLetters[i], allLetters[j]] = [allLetters[j], allLetters[i]];
  }


  // Fill the grid with shuffled letters
  for (let i = 0; i < size; i++) {
    const row = allLetters.slice(i * size, (i + 1) * size);
    grid.push(row);
  }
 
  return grid;
};


// Function to shuffle the grid for each level
const shuffleGrid = (grid) => {
  const flatGrid = grid.flat();
  for (let i = flatGrid.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flatGrid[i], flatGrid[j]] = [flatGrid[j], flatGrid[i]];
  }
  const newGrid = [];
  for (let i = 0; i < flatGrid.length; i += grid.length) {
    newGrid.push(flatGrid.slice(i, i + grid.length));
  }
  return newGrid;
};


// Function to determine grid size based on level
const getGridSize = (level) => {
  if (level < 5) return 4;
  if (level < 9) return 6;
  if (level < 13) return 8;
  return 10;
};


// Function to shuffle target letters
const getRandomTarget = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
};


// Generate initial levels with random grids and targets
const generateLevels = () => {
  const totalLevels = 15;
  const levels = [];
  for (let i = 0; i < totalLevels; i++) {
    const size = getGridSize(i);
    const target = getRandomTarget();
    levels.push({
      grid: generateGrid(size, target),
      target: target,
    });
  }
  return levels;
};


const levels = generateLevels();


const Page4 = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [grid, setGrid] = useState(shuffleGrid(levels[currentLevel].grid));
  const [target, setTarget] = useState(levels[currentLevel].target);
  const [found, setFound] = useState([]);
  const [submitted, setSubmitted] = useState(false);


  // Handle clicking on a grid cell
  const handleClick = (row, col) => {
    if (grid[row][col] === target) {
      const newFound = [...found, `${row}-${col}`];
      setFound(newFound);
    }
  };


  // Check if all instances of the target letter are found
  const handleSubmit = () => {
    const totalTargets = grid.flat().filter((letter) => letter === target).length;
    if (found.length === totalTargets) {
      setSubmitted(true);
    } else {
      alert('Not all letters found! Try again.');
    }
  };


  // Move to the next level
  const handleNext = () => {
    if (currentLevel < levels.length - 1) {
      const nextLevel = currentLevel + 1;
      setCurrentLevel(nextLevel);
      setGrid(shuffleGrid(levels[nextLevel].grid));
      setTarget(levels[nextLevel].target);
      setFound([]);
      setSubmitted(false);
    } else {
      alert('You have completed all levels!');
    }
  };


  // Move to the previous level
  const handlePrevious = () => {
    if (currentLevel > 0) {
      const prevLevel = currentLevel - 1;
      setCurrentLevel(prevLevel);
      setGrid(shuffleGrid(levels[prevLevel].grid));
      setTarget(levels[prevLevel].target);
      setFound([]);
      setSubmitted(false);
    }
  };


  const totalLevels = levels.length;
  const levelsCompleted = currentLevel + (submitted ? 1 : 0);
  const levelsRemaining = totalLevels - levelsCompleted;


  const gridSize = getGridSize(currentLevel);


  return (
    <div className="container">
      <div className="info">
        <p>Levels: {totalLevels}</p>
        <p>Completed: {levelsCompleted}</p>
        <p>Remaining: {levelsRemaining}</p>
      </div>
      <div className="game-container">
        <h1>Find All "{target}"</h1>
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          }}
        >
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((letter, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell ${found.includes(`${rowIndex}-${colIndex}`) ? 'highlight' : ''}`}
                  onClick={() => handleClick(rowIndex, colIndex)}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit} disabled={submitted}>
          Submit
        </button>
        <div className="navigation-buttons">
          {currentLevel > 0 && (
            <button className="previous-button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {submitted && (
            <button className="next-button123" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


export default Page4;
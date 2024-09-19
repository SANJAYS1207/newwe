import React from 'react';
import './Page6.css';
import additionImage from './addition.png';
import subtractionImage from './subtraction.png';
import multiplicationImage from './multiplication.png';
import divisionImage from './division.png';
import { Link } from 'react-router-dom';

function Page6() {
  return (
    <div className="Page6">
      <div className="content">
        <div className="icon-column">
          <Link to="/addition" className="icon-link">
            <div className="icon-item">
              <img src={additionImage} alt="Addition" />
              <span>Addition</span>
            </div>
          </Link>
          <Link to="/subtraction" className="icon-link">
            <div className="icon-item">
              <img src={subtractionImage} alt="Subtraction" />
              <span>Subtraction</span>
            </div>
          </Link>
          <Link to="/multiplication" className="icon-link">
            <div className="icon-item">
              <img src={multiplicationImage} alt="Multiplication" />
              <span>Multiplication</span>
            </div>
          </Link>
          <Link to="/division" className="icon-link">
            <div className="icon-item">
              <img src={divisionImage} alt="Division" />
              <span>Division</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page6;

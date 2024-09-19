import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>InnoScribe</h1>
      <Link to="/login">
        <button className="login-button"></button>
      </Link>
    </header>
  );
};

export default Header;
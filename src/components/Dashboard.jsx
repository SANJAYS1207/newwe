import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <>
    <div className="home-page">
      <div className="box-container">
        <Link to="/page6" className="box"></Link>
        <Link to="/page2" className="box"></Link>
        <Link to="/page3" className="box"></Link>
        <Link to="/page4" className="box"></Link>
        <Link to="/page5" className="box"></Link>
        <Link to="/newpage" className="box"></Link>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Import the theme provider
import Login from './components/Login';
import Analysis from './components/Analysis';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/PenPlotter';
import Page6 from './components/Page6';
import Dashboard from './components/Dashboard';
import Learn from './components/Learn';
import Practice from './components/Practice';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Mul from './components/Mul';
import Sub from './components/Sub';
import Div from './components/Div';
import Taketest from './components/Taketest';
import NewPage from './components/NewPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <div className="app">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/newpage" element={<NewPage />} />
              <Route path="/addition" element={<Add />} />
              <Route path="/subtraction" element={<Sub />} />
              <Route path="/multiplication" element={<Mul />} />
              <Route path="/division" element={<Div />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
              <Route path="/page5" element={<Page5 />} />
              <Route path="/page6" element={<Page6 />} />
              <Route path="/taketest" element={<Taketest />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/practice" element={<Practice />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

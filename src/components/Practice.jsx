import React, { useState } from 'react';
import questions from './questions.json';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const handleUseHint = () => {
    if (hintsUsed < 3) {
      setHintsUsed(hintsUsed + 1);
      alert(`Hint: Consider eliminating the obviously wrong options!`);
    } else {
      alert('Sorry, no more hints available.');
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setHintsUsed(0);
  };

  const handleQuitQuiz = () => {
    setShowResults(true);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#07192f"
    }}>
      <div style={{
        padding: "20px", 
        maxWidth: "600px", 
        width: "100%",
        fontFamily: "'Comic Sans MS', sans-serif", 
        backgroundColor: "#e0f7fa", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{ textAlign: "center", color: "#00796b" }}>Interactive Quiz</h1>
        {showResults ? (
          <div>
            <h2 style={{ textAlign: "center", color: "#004d40" }}>Quiz Completed!</h2>
            <p style={{ textAlign: "center", fontSize: "18px" }}>Your score: {score} out of {questions.length}</p>
            <p style={{ textAlign: "center", fontSize: "18px" }}>{score > questions.length / 2 ? "You're amazing!" : "Keep up the good work!"}</p>
            <div style={{ textAlign: "center" }}>
              <button onClick={handleRestartQuiz} style={{
                padding: "10px 20px", 
                marginTop: "20px", 
                backgroundColor: "#00796b", 
                color: "#fff", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer"
              }}>Restart Quiz</button>
            </div>
          </div>
        ) : (
          <div>
            <h2 style={{ textAlign: "center", color: "#004d40" }}>Question {currentQuestion + 1} / {questions.length}</h2>
            <p style={{ textAlign: "center", fontSize: "18px" }}>{questions[currentQuestion].questionText}</p>
            <div style={{ margin: "20px 0" }}>
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  style={{
                    display: "block",
                    padding: "10px 20px",
                    margin: "10px 0",
                    width: "100%",
                    backgroundColor: "#b2dfdb",
                    border: "1px solid #004d40",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}>
                  {option.answerText}
                </button>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <button onClick={handleUseHint} style={{
                padding: "10px 20px", 
                marginTop: "10px", 
                backgroundColor: "#00796b", 
                color: "#fff", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer"
              }}>Use Hint</button>
              <button onClick={handleQuitQuiz} style={{
                padding: "10px 20px", 
                marginTop: "10px", 
                marginLeft: "10px", 
                backgroundColor: "#d32f2f", 
                color: "#fff", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer"
              }}>Quit Quiz</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;

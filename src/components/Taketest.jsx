import React, { useState, useEffect } from 'react';
import questions from './questions.json';
import AppleOranges from './AppleOranges';

const Taketest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submittedQuestions, setSubmittedQuestions] = useState([]);
  const [reviewedQuestions, setReviewedQuestions] = useState([]);
  const [timer, setTimer] = useState(300); // 5-minute timer

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleQuestionSubmit = () => {
    setSubmittedQuestions([...submittedQuestions, currentQuestion]);
    setSelectedAnswer(null);
    handleNextQuestion();
  };

  const handleMarkForReview = () => {
    setReviewedQuestions([...reviewedQuestions, currentQuestion]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinalSubmit = () => {
    alert('Quiz Submitted!');
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ backgroundColor: '#001c35', color: '#e0f7fa', minHeight: '100vh', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: 'white' }}>InnoProctor</h1>
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          Time Left: {formatTime(timer)}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ flex: 2, padding: '20px', backgroundColor: '#002a46', borderRadius: '10px' }}>
          <h2 style={{ color: 'white' }}>
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p style={{ fontSize: '28px', marginBottom: '20px', color: 'white' }}>
            {questions[currentQuestion].questionText}
          </p>
          


          <div style={{ marginBottom: '20px' }}>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                style={{
                  display: 'block',
                  padding: '10px 20px',
                  margin: '10px 0',
                  width: '100%',
                  backgroundColor: selectedAnswer === index ? '#00a2d9' : '#004d67',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: "20px"
                }}
              >
                {option.answerText}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={handleQuestionSubmit}
              style={{
                padding: '10px 20px',
                backgroundColor: '#126f35',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px',
                fontSize: "20px"
              }}
            >
              Submit Answer
            </button>
            <button
              onClick={handleMarkForReview}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffa726',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: "20px"
              }}
            >
              Mark for Review
            </button>
            <button
              onClick={handleNextQuestion}
              style={{
                padding: '10px 20px',
                backgroundColor: '#004d67',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: "20px"
              }}
            >
              Next Question
            </button>
            <button
              onClick={handlePrevQuestion}
              style={{
                padding: '10px 20px',
                backgroundColor: '#004d67',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginLeft: '10px',
                fontSize: "20px"
              }}
            >
              Previous Question
            </button>
            
          </div>
        </div>

        <div style={{ flex: 1, padding: '20px', marginLeft: '20px', backgroundColor: '#002a46', borderRadius: '10px' }}>
          <h2 style={{ color: '#4db6ac', textAlign: 'center' }}>Questions</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {questions.map((_, index) => (
              <button
                key={index}
                style={{
                  width: '40px',
                  height: '40px',
                  margin: '5px',
                  backgroundColor: submittedQuestions.includes(index)
                    ? '#4db6ac'
                    : reviewedQuestions.includes(index)
                      ? '#ffa726'
                      : '#004d67',
                  border: 'none',
                  borderRadius: '50%',
                  color: '#fff',
                  fontSize: "20px",
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleFinalSubmit}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#e53935',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: "20px"
            }}
          >
            Final Submit
          </button>
          
        </div>
        
      </div><br></br>
      <center>
                <AppleOranges
            operation={questions[currentQuestion].operation}
            operands={questions[currentQuestion].operands}
        />
        </center>
    </div>
    
  );
};

export default Taketest;

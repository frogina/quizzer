import React from 'react';
import '../assets/styles/pages/Quiz.css';
import Button from '../components/Button';

const Quiz: React.FC = () => {
  const handleFinishQuiz = () => {
    // Add your finish quiz logic here
    console.log('Quiz finished!');
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Page</h1>
      <p>This is the quiz page. Click below to finish the quiz:</p>
      <div className="finish-button">
        <Button onClick={handleFinishQuiz} variant="primary">
          Finish Quiz
        </Button>
      </div>
    </div>
  );
};

export default Quiz;

import React from 'react';
import '../assets/styles/pages/Result.css';
import Button from '../components/Button';

const Result: React.FC = () => {
  const handleShareResult = () => {
    // Add your share result logic here
    console.log('Result shared!');
  };

  return (
    <div className="result-container">
      <h1>Result Page</h1>
      <p>Congratulations! You have completed the quiz.</p>
      <p>Your result is: 85%</p>
      <div className="share-button">
        <Button onClick={handleShareResult} variant="primary">
          Share Result
        </Button>
      </div>
    </div>
  );
};

export default Result;

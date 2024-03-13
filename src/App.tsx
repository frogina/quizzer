import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import RadarChart from './pages/RadarChart';
import NavigationBar from './components/NavigationBar';
import './assets/styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/radar-chart" element={<RadarChart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

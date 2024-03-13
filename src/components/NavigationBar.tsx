import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NavigationBar.css';

const NavigationBar: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="nav-link">
              Quiz
            </Link>
          </li>
          <li>
            <Link to="/result" className="nav-link">
              Result
            </Link>
          </li>
          <li>
            <Link to="/radar-chart" className="nav-link">
              Radar Chart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
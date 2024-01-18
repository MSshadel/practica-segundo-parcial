// components/ProgressBar.js
import React, { useEffect, useState } from 'react';
import '../style/ProgressBar.css';

const ProgressBar = ({ percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (currentPercentage !== percentage) {
      setCurrentPercentage(percentage);
    }
  }, [currentPercentage, percentage]);

  return (
    <div className="progress-bar-container">
      <div className="progress-text">Progress Bar</div>
      <div className="progress-bottle" style={{ left: `${currentPercentage}%` }}></div>
      <div className="progress-bar" style={{ width: `${currentPercentage}%` }}></div>
      <div className="select-container">
      <h1 > Progress Bar</h1>

      </div>
    </div>
  );
};

export default ProgressBar;

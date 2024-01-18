// App.js
import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(40);

  const handlePercentageChange = (e) => {
    const newPercentage = parseInt(e.target.value, 10);
    setProgress(newPercentage);
  };

  return (
    <div>
      <ProgressBar percentage={progress} />
      <div>
        <label htmlFor="percentage">Input porcentage</label>
        <select id="percentage" onChange={handlePercentageChange} value={progress}>
          <option value={10}>10%</option>
          <option value={20}>20%</option>
          <option value={30}>30%</option>
          <option value={40}>40%</option>
          <option value={50}>50%</option>
          <option value={60}>60%</option>
          <option value={70}>70%</option>
          <option value={80}>80%</option>
          <option value={90}>90%</option>
          <option value={100}>100%</option>
          {/* Puedes agregar más opciones según tus necesidades */}
        </select>
      </div>
    </div>
  );
};

export default App;

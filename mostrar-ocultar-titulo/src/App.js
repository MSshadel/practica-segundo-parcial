// App.js
import React, { useState } from 'react';
import ToggleButton from './components/ToggleButton';
import TextContent from './components/TextContent';
import './style/App.css';

function App() {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="app">
      <button
        onClick={toggleContent}
        style={{
          backgroundColor: '#8c1aff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          marginRight: '10px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        {isContentVisible ? 'Ocultar-Mostrar' : ''}
      </button>
      <TextContent isVisible={isContentVisible} />
    </div>
  );
}

export default App;

// ToggleButton.js
import React from 'react';

const ToggleButton = ({ onClick, isVisible }) => {
  return (
    <button onClick={onClick}>
      {isVisible ? 'Ocultar-Mostrar' : ' '}
    </button>
  );
};

export default ToggleButton;

// TextContent.js
import React from 'react';

const TextContent = ({ isVisible }) => {
  return (
    <div>
      {isVisible && (
        <p>
          Welcome to React challenges
        </p>
      )}
    </div>
  );
};

export default TextContent;

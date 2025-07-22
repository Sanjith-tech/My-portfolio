import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <div className="background-container">
      {/* Rotating gears */}
      <div className="gear gear1">⚙️</div>
      <div className="gear gear2">⚙️</div>

      {/* Floating code symbols */}
      <div className="symbol sym1">{'{ }'}</div>
      <div className="symbol sym2">{'</>'}</div>
      <div className="symbol sym3">{'function()'}</div>
    </div>
  );
};

export default Background;

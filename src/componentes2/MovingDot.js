import React, { useState } from 'react'; 

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div className="movingdot-container" onMouseMove={handleMouseMove}>
      <div
        className="dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </div>
  );
}

export default MovingDot;

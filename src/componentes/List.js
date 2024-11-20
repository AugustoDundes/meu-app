import React from 'react';
import '../Atv03.css';

function Lista({ items }) {
  return (
    <ul className="lista">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Lista;

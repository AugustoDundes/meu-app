import React from 'react';
import '../Atv03.css';

function StatusMessage({ isOnline }) {
  return (
    <p className={`status ${isOnline ? 'online' : 'offline'}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  );
}

export default StatusMessage;

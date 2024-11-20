import React from 'react';
import '../Atv03.css';

function Perfil({ name, imageUrl }) {
  return (
    <div className="perfil">
      <img src={imageUrl} alt={`${name}'s profile`} className="perfil-img" />
      <p>{name}</p>
    </div>
  );
}

export default Perfil;

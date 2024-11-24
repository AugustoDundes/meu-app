import React, { useState } from 'react';

function CounterList() {
  const [contadores, setContadores] = useState([0, 0, 0]);

  const incrementarContador = (indice) => {
    setContadores(contadores.map((contador, i) => (i === indice ? contador + 1 : contador)));
  };

  return (
    <div className="counter-list-container">
      <h3>Lista de Contadores</h3>
      {contadores.map((contador, indice) => (
        <div key={indice} className="counter-item">
          <span className="contador">{contador}</span>
          <button className="increment-button" onClick={() => incrementarContador(indice)}>
            +1
          </button>
        </div>
      ))}
    </div>
  );
}

export default CounterList;

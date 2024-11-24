import React, { useState } from 'react';

function CounterList() {
  const [contadores, setContadores] = useState([0, 0, 0]);

  const incrementarContador = (indice) => {
    setContadores(contadores.map((contador, i) => (i === indice ? contador + 1 : contador)));
  };

  return (
    <div>
      <h3>Lista de Contadores</h3>
      {contadores.map((contador, indice) => (
        <div key={indice}>
          <span>{contador}</span>
          <button onClick={() => incrementarContador(indice)}>
            +1
          </button>
        </div>
      ))}
    </div>
  );
}

export default CounterList;

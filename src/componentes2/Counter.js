import React, { useState } from 'react';

function Counter() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h3>Contador</h3>
      <p>Valor atual: {contador}</p>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
    </div>
  );
}

export default Counter;

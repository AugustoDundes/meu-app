import React, { useState } from 'react';

function List4() {
  const [itens, setItens] = useState(['Comprar maças', 'Comprar uvas', 'Comprar suco de acerola']);

  const inverterLista = () => {
    setItens([...itens].reverse());
  };

  return (
    <div className="list4">
      <h3>Lista de Compras</h3>
      <button onClick={inverterLista}>Inverter Lista</button>
      <ul>
        {itens.map((item, indice) => (
          <li key={indice}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List4;

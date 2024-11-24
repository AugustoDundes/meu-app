import React, { useState } from 'react';

function List2() {
  const [itens, setItens] = useState(['Marta Colvin Andrade', 'Lamidi Olonade Fakeye', 'Louise Nevelson']);

  const removerItem = (indiceParaRemover) => {
    setItens(itens.filter((_, indice) => indice !== indiceParaRemover));
  };

  return (
    <div className="list2-container">
      <h3>Escultores Inspiradores:</h3>
      <ul>
        {itens.map((item, indice) => (
          <li key={indice} className="escultor-item">
            {item} <button onClick={() => removerItem(indice)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List2;

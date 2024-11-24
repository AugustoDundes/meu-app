import React, { useState } from 'react';

function List2() {
  const [itens, setItens] = useState(['Aleijadinho', 'Fernando Botero', 'Michelangelo']);

  const removerItem = (indiceParaRemover) => {
    setItens(itens.filter((_, indice) => indice !== indiceParaRemover));
  };

  return (
    <div>
      <h3>Escultores Inspiradores:</h3>
      <ul>
        {itens.map((item, indice) => (
          <li key={indice}>
            {item} <button onClick={() => removerItem(indice)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List2;

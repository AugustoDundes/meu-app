import React, { useState } from 'react';

function BucketList() {
  const [listaArte, setListaArte] = useState(['Da vinci', 'Van Gogh']);
  const [minhaLista, setMinhaLista] = useState([]);
  const [itensFeitos, setItensFeitos] = useState([]);

  const adicionarAMinhaLista = (item) => {
    if (!minhaLista.includes(item)) {
      setMinhaLista([...minhaLista, item]);
    }
  };

  const marcarComoFeito = (item) => {
    if (!itensFeitos.includes(item)) {
      setItensFeitos([...itensFeitos, item]);
    }
  };

  return (
    <div>
      <h3>Lista de Arte</h3>
      <ul>
        {listaArte.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => adicionarAMinhaLista(item)}>Adicionar à Minha Lista</button>
          </li>
        ))}
      </ul>
      <h3>Sua lista de arte:</h3>
      <ul>
        {minhaLista.map((item, index) => (
          <li key={index} className={itensFeitos.includes(item) ? 'feito' : ''}>
            {item}{' '}
            <button
              className={itensFeitos.includes(item) ? 'check-button feito' : 'check-button'}
              onClick={() => marcarComoFeito(item)}
            >
              {itensFeitos.includes(item) ? 'Feito' : 'Marcar como Feito'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;

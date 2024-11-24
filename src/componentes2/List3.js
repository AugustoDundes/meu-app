import React, { useState } from 'react';

function List3() {
  const [itens, setItens] = useState([]);
  const [entrada, setEntrada] = useState('');

  const adicionarItem = () => {
    if (entrada.trim() !== '') {
      setItens([...itens, entrada.trim()]);
      setEntrada('');
    }
  };

  return (
    <div className="list3-container">
      <h3>Adicione Escultores Inspiradores:</h3>
      <div className="input-container">
        <input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          placeholder="Digite um nome"
        />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>
      <ul>
        {itens.map((item, indice) => (
          <li key={indice} className="escultor-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List3;

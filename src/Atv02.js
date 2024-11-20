import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Atv02.css';

function Atv02() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => setHomens(homens > 0 ? homens - 1 : 0);
  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => setMulheres(mulheres > 0 ? mulheres - 1 : 0);

  const resetarContadores = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="contador-app">
      <h2>Atividade 02</h2>
      <div className="total">
        <h3>Total</h3>
        <input type="text" value={homens + mulheres} readOnly />
        <button onClick={resetarContadores}>🔄</button>
      </div>
      <div className="contadores">
        <div className="contador">
          <h4>Homens</h4>
          <img src="/imagens/homem.png" alt="Homem" />
          <button onClick={incrementarHomens}>+</button>
          <span>{homens}</span>
          <button onClick={decrementarHomens}>-</button>
        </div>
        <div className="contador">
          <h4>Mulheres</h4>
          <img src="/imagens/mulherr.png" alt="Mulher" />
          <button onClick={incrementarMulheres}>+</button>
          <span>{mulheres}</span>
          <button onClick={decrementarMulheres}>-</button>
        </div>
      </div>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv02;

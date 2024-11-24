import React, { useState } from 'react';

function Form() {
  const [destinatario, setDestinatario] = useState('Alice');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada para ${destinatario}: "${mensagem}"`);
    setMensagem(''); // Limpa a mensagem após o envio
  };

  return (
    <form onSubmit={enviarMensagem} className="form">
      <h3 className="form-title">Envie uma mensagem pelo formulário abaixo:</h3>
      <div className="form-group">
        <label htmlFor="destinatario">Para:</label>
        <select
          id="destinatario"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
          className="form-select"
        >
          <option value="Alice">Alice</option>
          <option value="Ana Carolina">Ana Carolina</option>
          <option value="Gabriel">Gabriel</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="form-textarea"
          placeholder="Digite sua mensagem aqui..."
        />
      </div>

      <button type="submit" className="form-button">
        Enviar
      </button>
    </form>
  );
}

export default Form;

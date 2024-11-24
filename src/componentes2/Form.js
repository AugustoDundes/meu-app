import React, { useState } from 'react';

function Form() {
  const [destinatario, setDestinatario] = useState('Alice');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada para ${destinatario}: "${mensagem}"`);
    setMensagem('');
  };

  return (
    <form onSubmit={enviarMensagem}>
      <h3>Envie uma mensagem pelo formulário abaixo:</h3>
      <div>
        <label htmlFor="destinatario">Para:</label>
        <select
          id="destinatario"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
        >
          <option value="Você">Você mesmo</option>
          <option value="João">João</option>
          <option value="Vitor">Vitor</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Digite sua mensagem"
        />
      </div>

      <button type="submit">
        Enviar
      </button>
    </form>
  );
}

export default Form;

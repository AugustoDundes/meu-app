import React, { useState } from 'react';

function Form2() {
  const [dadosFormulario, setDadosFormulario] = useState({
    primeiroNome: '',
    sobrenome: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  return (
    <div className="form2-container">
      <h3>Preencha o Formulário</h3>
      <form className="form2">
        <label>
          Primeiro Nome:
          <input
            type="text"
            name="primeiroNome"
            value={dadosFormulario.primeiroNome}
            onChange={handleChange}
            placeholder="Primeiro nome"
          />
        </label>
        <label>
          Sobrenome:
          <input
            type="text"
            name="sobrenome"
            value={dadosFormulario.sobrenome}
            onChange={handleChange}
            placeholder="Sobrenome"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={dadosFormulario.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <p>
        {dadosFormulario.primeiroNome} {dadosFormulario.sobrenome} ({dadosFormulario.email})
      </p>
    </div>
  );
}

export default Form2;

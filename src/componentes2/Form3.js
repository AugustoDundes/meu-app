import React, { useState } from 'react';

function Form3() {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    titulo: '',
    cidade: '',
    imagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  const copiarLink = (link) => {
    navigator.clipboard.writeText(link);
    alert(`Link copiado: ${link}`);
  };

  return (
    <div>
      <h3>Formulário de Esculturas</h3>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={dadosFormulario.nome}
            onChange={handleChange}
            placeholder="Nome do escultor"
          />
        </label>
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={dadosFormulario.titulo}
            onChange={handleChange}
            placeholder="Título da obra"
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="cidade"
            value={dadosFormulario.cidade}
            onChange={handleChange}
            placeholder="Cidade"
          />
        </label>
        <label>
          Imagem:
          <input
            type="text"
            name="imagem"
            value={dadosFormulario.imagem}
            onChange={handleChange}
            placeholder="Link da imagem"
          />
        </label>
        <div>
          <p>Links sugeridos:</p>
          <button
            type="button"
            onClick={() =>
              copiarLink(
                'https://pt.wikipedia.org/wiki/O_Pensador'
              )
            }
          >
            Copiar Link 1
          </button>
          <button
            type="button"
            onClick={() =>
              copiarLink(
                'https://www.ebiografia.com/escultores_famosos_suas_obras_incriveis/'
              )
            }
          >
            Copiar Link 2
          </button>
        </div>
      </form>
      {dadosFormulario.titulo && dadosFormulario.nome && dadosFormulario.cidade && (
        <p>
          <b>{dadosFormulario.titulo}</b> por {dadosFormulario.nome} (localizado em {dadosFormulario.cidade})
        </p>
      )}
      {dadosFormulario.imagem && (
        <img
          src={dadosFormulario.imagem}
          alt={dadosFormulario.titulo}
          style={{ width: '300px', borderRadius: '8px', marginTop: '20px' }}
        />
      )}
    </div>
  );
}

export default Form3;

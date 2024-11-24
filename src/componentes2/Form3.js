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
    <div className="form3-container">
      <h3>Formulário de Esculturas</h3>
      <form className="form3">
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={dadosFormulario.nome}
            onChange={handleChange}
            placeholder="Digite o nome do escultor"
          />
        </label>
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={dadosFormulario.titulo}
            onChange={handleChange}
            placeholder="Digite o título da obra"
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="cidade"
            value={dadosFormulario.cidade}
            onChange={handleChange}
            placeholder="Digite a cidade"
          />
        </label>
        <label>
          Imagem:
          <input
            type="text"
            name="imagem"
            value={dadosFormulario.imagem}
            onChange={handleChange}
            placeholder="Cole o link da imagem"
          />
        </label>
        <div className="suggestion-links">
          <p>Links sugeridos:</p>
          <button
            type="button"
            onClick={() =>
              copiarLink(
                'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic2710344.webp?w=760&h=509'
              )
            }
          >
            Copiar Link 1
          </button>
          <button
            type="button"
            onClick={() =>
              copiarLink(
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/640px-Christ_the_Redeemer_-_Cristo_Redentor.jpg'
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

import React from 'react';

function BarraDeFerramentas({ aoReproduzirFilme, aoEnviarImagem }) {
  return (
    <div className="barra-de-ferramentas">
      <h2>Atividades da Barra de Ferramentas</h2>
      <button onClick={aoReproduzirFilme}>Reproduzir Filme</button>
      <button onClick={aoEnviarImagem}>Enviar Imagem</button>
    </div>
  );
}

export default BarraDeFerramentas;


import React, { useState } from 'react';

function Gallery() {
  const esculturas = [
    {
      nome: "Abaporu",
      artista: "Tarsila do Amaral",
      descricao: "Uma das obras mais emblemáticas da arte brasileira, simboliza a antropofagia cultural.",
      imagem: "https://upload.wikimedia.org/wikipedia/pt/b/bd/Abaporu.jpg",
    },
    {
      nome: "Monumento às Bandeiras",
      artista: "Victor Brecheret",
      descricao: "Um monumento em São Paulo que homenageia os bandeirantes e sua importância histórica.",
      imagem: "https://www.cidadeecultura.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/Alf-Ribeiro-0211-0108-cidadeecultura.jpg.webp",
    },
  ];

  const [indice, setIndice] = useState(0);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const proximaEscultura = () => {
    setIndice((indice + 1) % esculturas.length);
    setMostrarDetalhes(false); 
  };

  return (
    <div className="gallery">
      <h3>{esculturas[indice].nome}</h3>
      <p>Artista: {esculturas[indice].artista}</p>
      <img
        src={esculturas[indice].imagem}
        alt={esculturas[indice].nome}
        style={{ width: "300px", borderRadius: "8px", marginBottom: "10px" }}
      />
      <button onClick={proximaEscultura}>Próxima Escultura</button>
      <button onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>
        {mostrarDetalhes ? "Ocultar Detalhes" : "Exibir Detalhes"}
      </button>
      {mostrarDetalhes && <p>{esculturas[indice].descricao}</p>}
    </div>
  );
}

export default Gallery;

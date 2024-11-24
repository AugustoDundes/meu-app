import React, { useState } from 'react';

function Gallery() {
  const esculturas = [
    {
      nome: "David",
      artista: "Michelangelo",
      descricao: "David ou Davi é uma das esculturas mais famosas do artista renascentista Michelangelo.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Michelangelo%27s_David_2015.jpg/245px-Michelangelo%27s_David_2015.jpg",
    },
    {
      nome: "O Pensador",
      artista: "Auguste Rodin",
      descricao: "O Pensador (francês: Le Penseur) é uma das mais famosas esculturas de bronze do escultor francês Auguste Rodin.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Paris_2010_-_Le_Penseur.jpg/250px-Paris_2010_-_Le_Penseur.jpg",
    },
  ];

  const [indice, setIndice] = useState(0);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const proximaEscultura = () => {
    setIndice((indice + 1) % esculturas.length);
    setMostrarDetalhes(false); 
  };

  return (
    <div>
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
